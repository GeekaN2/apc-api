import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ServerService } from './server.service';
import { CreateServerDto, GetServerByLabelDto } from './dto/CreateServer.dto';

@Controller('server')
export class ServerController {
  constructor(private serverService: ServerService) {}

  @Post('create')
  async createServer(@Body() createServerDto: CreateServerDto) {
    return this.serverService.createServer(createServerDto);
  }

  @Get('all')
  async getAllServers() {
    return this.serverService.getAllServers();
  }

  @Get('byLabel')
  async getServerByLabel(@Query() { label }: GetServerByLabelDto) {
    return this.serverService.getServerByLabel(label);
  }
}
