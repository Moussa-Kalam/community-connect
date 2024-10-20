import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';
import { ActiveUser } from '../iam/decorators/active-user.decorator';
import { ActiveUserData } from '../iam/interfaces/active-user-data.interface';
import { Roles } from '../iam/authorization/decorators/roles.decorator';
import { UserRoles } from '../users/enums';

@Controller('profiles')
@Roles(UserRoles.ARTISAN, UserRoles.BUSINESS)
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Post()
  create(
    @Body() createProfileDto: CreateProfileDto,
    @ActiveUser() user: ActiveUserData,
  ): Promise<Profile> {
    const userId = user.sub;
    console.log('userId', userId);
    return this.profilesService.create({ ...createProfileDto, userId });
  }

  @Get()
  findAll() {
    return this.profilesService.findAll();
  }

  @Get('user')
  findOneByUserId(@Query('id', ParseIntPipe) id: number): Promise<Profile> {
    return this.profilesService.findOneByUserId(id);
  }

  @Patch('user')
  updateByUserId(
    @Query('id', ParseIntPipe) id: number,
    @Body() updateProfileDto: UpdateProfileDto,
  ): Promise<Profile> {
    return this.profilesService.update(id, updateProfileDto);
  }

  // @Delete(':id')
  // remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
  //   return this.profilesService.remove(id);
  // }
}
