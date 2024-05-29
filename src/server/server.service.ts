import { Injectable } from '@nestjs/common';
import { CreateServerDto } from './dto/CreateServer.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ServerService {
  async createServer(server: CreateServerDto) {
    const prisma = new PrismaClient();

    console.log('Hello');

    await prisma.$connect();

    const response = prisma.server
      .create({
        data: server,
      })
      .then(({ name }) => console.log(name));

    console.log(response);

    return response;
  }
}
