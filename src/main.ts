import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages/messages.module';
import * as morgan from 'morgan';

const PORT = 3000;
const logger = new Logger('Main');

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule, {
    logger: ['log', 'debug'],
  });

  app.use(morgan('tiny'));

  await app.listen(PORT);
}
bootstrap().then(() => logger.debug(`Starting Application on PORT: ${PORT}`));
