import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { ActiveUserData } from '../iam/interfaces/active-user-data.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  async findAll(): Promise<User[]> {
    const users = await this.userRepository.find();
    return plainToInstance(User, users);
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return plainToInstance(User, user);
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
    activeUser: ActiveUserData,
  ): Promise<User> {
    const user = await this.findOne(id);

    if (user.email !== activeUser.email) {
      throw new ForbiddenException('You are not allowed to update this user');
    }

    Object.assign(user, updateUserDto);
    return this.userRepository.save(user);
  }

  async remove(id: number, activeUser: ActiveUserData): Promise<void> {
    const user = await this.findOne(id);

    if (user.email !== activeUser.email) {
      throw new ForbiddenException('You are not allowed to delete this user');
    }

    const result = await this.userRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
  }
}
