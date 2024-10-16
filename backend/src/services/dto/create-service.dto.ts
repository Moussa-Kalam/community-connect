import { IsDecimal, IsEnum, IsNumber, IsString, Min } from 'class-validator';
import { ServiceAvailability } from '../enums/availability.enum';

export class CreateServiceDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsDecimal()
  @Min(0)
  price: number;

  @IsEnum(ServiceAvailability)
  availability: ServiceAvailability;

  @IsNumber()
  @Min(1)
  duration: number;
}
