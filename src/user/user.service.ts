import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/CreateUser.dto';

@Injectable()
export class UserService {
  createUser(user: CreateUserDto) {
    console.log('created', user);
  }
}
