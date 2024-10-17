import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
  ) {}

  async create(
    createProfileDto: CreateProfileDto & { userId: number },
  ): Promise<Profile> {
    const newProfile = this.profileRepository.create(createProfileDto);
    return this.profileRepository.save(newProfile);
  }

  findAll(): Promise<Profile[]> {
    return this.profileRepository.find();
  }

  async findOne(id: number): Promise<Profile> {
    const profile = await this.profileRepository.findOne({ where: { id } });

    if (!profile)
      throw new NotFoundException(`Profile with ID ${id} not found`);

    return profile;
  }

  async update(
    id: number,
    updateProfileDto: UpdateProfileDto,
  ): Promise<Profile> {
    const profile = await this.findOne(id);

    Object.assign(profile, updateProfileDto);
    return this.profileRepository.save(profile);
  }

  async remove(id: number): Promise<void> {
    const result = await this.profileRepository.delete(id);

    if (result.affected === 0)
      throw new NotFoundException(`Profile with ID ${id} not found`);
  }
}
