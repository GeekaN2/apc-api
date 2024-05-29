import { User } from '@prisma/client';

export class CreateUserDto {
  nickname: User['id'];
  password: User['password'];
}
