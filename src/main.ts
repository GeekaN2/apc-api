import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Albion Profit Calculator API')
    .setDescription(
      "Most of the request can be used without the authorization. You're welcome",
    )
    .setVersion('1.0')
    .addTag('APC')
    .addServer('http://localhost:3000', 'Localhost dev server')
    .build();

  app.useGlobalPipes(new ValidationPipe());
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.APP_PORT);
}
bootstrap();
