import { Body, Controller, Post } from '@nestjs/common';
import { NotifyService } from './notify.service';
import { TelegramNotificationDto } from './dto/TelegramNotification.dto';

@Controller('notify')
export class NotifyController {
  constructor(private notifyService: NotifyService) {}

  @Post('telegram')
  async telegramNotify(@Body() body: TelegramNotificationDto) {
    return this.notifyService.telegramNotify(body);
  }
}
