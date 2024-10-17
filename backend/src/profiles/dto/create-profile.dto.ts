import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';
import { ActivityCategories } from '../enums/activityCategories.enum';

export class CreateProfileDto {
  @IsString()
  activityName: string;

  @IsString()
  @IsOptional()
  bio: string;

  @IsString()
  location: string;

  @IsString()
  phoneNumber: string;

  @IsNotEmpty()
  @IsEnum(ActivityCategories)
  activityCategory: ActivityCategories;

  @IsUrl()
  @IsOptional()
  website?: string;
}
