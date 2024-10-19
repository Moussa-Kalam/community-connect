import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { Repository } from 'typeorm';
import { CreateProfileDto } from './dto/create-profile.dto';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
  ) {}

  async create(
    createProfileDto: CreateProfileDto & { userId: number },
  ): Promise<Profile> {
    const existingProfile = await this.profileRepository.findOne({
      where: { userId: createProfileDto.userId },
    });

    if (existingProfile) {
      throw new ConflictException('You already have a profile');
    }

    const newProfile = this.profileRepository.create(createProfileDto);
    return this.profileRepository.save(newProfile);
  }

  findAll(): Promise<Profile[]> {
    return this.profileRepository.find();
  }

  async findOneByUserId(id: number): Promise<Profile> {
    const profile = await this.profileRepository.findOne({
      where: {
        userId: id,
      },
    });

    if (!profile)
      throw new NotFoundException(`Profile with userId ${id} not found`);

    return profile;
  }

  async update(
    id: number,
    updateProfileDto: UpdateProfileDto,
  ): Promise<Profile> {
    const profile = await this.findOneByUserId(id);

    Object.assign(profile, updateProfileDto);
    return this.profileRepository.save(profile);
  }

  // async remove(id: number): Promise<void> {
  //   const result = await this.profileRepository.delete(id);
  //
  //   if (result.affected === 0)
  //     throw new NotFoundException(`Profile with ID ${id} not found`);
  // }
}
