import { ApiProperty } from '@nestjs/swagger';
import { Server } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';

export class ServerDto {
  label: Server['label'];
  name: Server['name'];
  description: Server['description'];
  natsUrl: Server['natsUrl'];
  healthCheckUrl: Server['healthCheckUrl'];

  @ApiProperty({ enum: ['private', 'public'] })
  scope: Server['scope'];
  userAccessIds?: Server['userAccessIds'];
}

export class CreateServerDto extends ServerDto {}

export class GetServerByLabelDto {
  @IsNotEmpty()
  label: Server['label'];
}
