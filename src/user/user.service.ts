import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/CreateUserDto';

@Injectable()
export class UserService {
  createUser(user: CreateUserDto) {
    console.log('created', user);
  }
}
