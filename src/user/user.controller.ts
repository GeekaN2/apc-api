import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/CreateUserDto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('create')
  async createUser(@Body() createUserDto: CreateUserDto) {
    this.userService.createUser(createUserDto);
  }
}
