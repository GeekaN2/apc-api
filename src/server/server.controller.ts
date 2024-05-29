import { Body, Controller, Post } from '@nestjs/common';
import { ServerService } from './server.service';
import { CreateServerDto } from './dto/CreateServer.dto';

@Controller('server')
export class ServerController {
  constructor(private serverService: ServerService) {}

  @Post('create')
  async createServer(@Body() createServerDto: CreateServerDto) {
    return this.serverService.createServer(createServerDto);
  }
}
