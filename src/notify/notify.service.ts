import { Injectable } from '@nestjs/common';
import { TelegramNotificationDto } from './dto/TelegramNotification.dto';

@Injectable()
export class NotifyService {
  telegramNotify({ message }: TelegramNotificationDto) {
    const notifyWebhook = process.env.NOTIFY_WEBHOOK;

    if (!notifyWebhook) {
      return;
    }

    // CodeX notify docs: https://github.com/codex-bot/notify
    const params = new URLSearchParams();
    params.append('message', message);
    params.append('parse_mode', 'Markdown');

    fetch(notifyWebhook, {
      method: 'POST',
      body: params,
    });
  }
}
