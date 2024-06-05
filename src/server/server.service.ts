import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateServerDto, ServerDto } from './dto/CreateServer.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ServerService {
  async createServer(server: CreateServerDto) {
    const prisma = new PrismaClient();

    await prisma.$connect();

    const response = prisma.server
      .create({
        data: server,
      })
      .then(({ name }) => console.log(name));

    console.log(response);

    return response;
  }

  async getAllServers(): Promise<ServerDto[]> {
    const prisma = new PrismaClient();

    await prisma.$connect();

    const servers = (await prisma.server.findMany({})).map<ServerDto>(
      (server) => ({
        description: server.description,
        healthCheckUrl: server.healthCheckUrl,
        label: server.label,
        name: server.name,
        scope: server.scope,
        userAccessIds: server.userAccessIds,
        natsUrl: server.natsUrl,
      }),
    );

    return servers;
  }

  async getServerByLabel(label: ServerDto['label']): Promise<ServerDto> {
    const prisma = new PrismaClient();

    await prisma.$connect();
    console.log(label);
    const server = await prisma.server.findFirst({
      where: {
        label: {
          equals: label,
        },
      },
    });

    if (!server) {
      throw new HttpException(
        'Server with such label is not found',
        HttpStatus.NOT_FOUND,
      );
    }

    return {
      description: server.description,
      healthCheckUrl: server.healthCheckUrl,
      label: server.label,
      name: server.name,
      scope: server.scope,
      userAccessIds: server.userAccessIds,
      natsUrl: server.natsUrl,
    };
  }
}
