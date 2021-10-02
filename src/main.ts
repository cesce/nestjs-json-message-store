import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages/messages.module';

const PORT = 3000;
const logger = new Logger('Main');

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule, {
    logger: ['log'],
  });
  await app.listen(PORT);
}
bootstrap().then(() => logger.log(`Starting Application on PORT: ${PORT}`));
