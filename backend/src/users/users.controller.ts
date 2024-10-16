import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ActiveUser } from '../iam/decorators/active-user.decorator';
import { ActiveUserData } from '../iam/interfaces/active-user-data.interface';
import { AuthType } from './enums';
import { User } from './entities/user.entity';
import { Auth } from '../iam/authentication/decorators/auth.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Auth(AuthType.None)
  @Get()
  findAll(): Promise<User[]> {
    /**
     * You can also have access to the information of the active user
     * if the route is protected, the user is authenticated, and the token is valid.
     * You can access the user information by using the ActiveUser decorator.
     **/

    // console.log(user.email);
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
    @ActiveUser() activeUser: ActiveUserData,
  ): Promise<User> {
    return this.usersService.update(id, updateUserDto, activeUser);
  }

  @Delete(':id')
  remove(
    @Param('id', ParseIntPipe) id: number,
    @ActiveUser() activeUser: ActiveUserData,
  ): Promise<void> {
    return this.usersService.remove(id, activeUser);
  }
}
