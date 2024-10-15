import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ActiveUser } from '../iam/decorators/active-user.decorator';
import { ActiveUserData } from '../iam/interfaces/active-user-data.interface';
import { Roles } from '../iam/authorization/decorators/roles.decorator';
import { UserRoles } from './enums';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // This is temporary
  // TODO: To be replaced with a proper role-based authorization
  // This is how you can protect a route with a specific role
  // In the case below, only users with the role BUSINESS can access this route
  @Roles(UserRoles.BUSINESS)
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(@ActiveUser() user: ActiveUserData) {
    /**
     * You can also have access to the information of the active user
     * if the route is protected, the user is authenticated, and the token is valid.
     * You can access the user information by using the ActiveUser decorator.
     **/

    console.log(user.email);
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
