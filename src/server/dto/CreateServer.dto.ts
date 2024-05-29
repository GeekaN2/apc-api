import { Server } from '@prisma/client';

export class CreateServerDto {
  label: Server['label'];
  name: Server['name'];
  description: Server['description'];
  natsUrl: Server['natsUrl'];
  healthCheckUrl: Server['healthCheckUrl'];
  scope: Server['scope'];
  userAccessIds: Server['userAccessIds'];
}
