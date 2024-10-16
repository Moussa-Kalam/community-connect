import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';
import { ActivityCategories } from '../enums/activityCategories.enum';

export class CreateProfileDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  bio: string;

  @IsString()
  location: string;

  @IsString()
  phoneNumber: string;

  @IsNotEmpty()
  activityCategory: ActivityCategories;

  @IsUrl()
  @IsOptional()
  website?: string;
}
