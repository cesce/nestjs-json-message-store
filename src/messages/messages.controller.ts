import { Controller, Get, Logger, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  logger: Logger;

  constructor() {
    this.logger = new Logger(MessagesController.name);
  }

  @Get()
  listMessages() {
    this.logger.debug(`/messages`);
    return 'A list of messages';
  }

  @Post()
  createMessage() {
    this.logger.debug(`/messages`);
    return 'Message created';
  }

  @Get('/:id')
  getMessage() {
    this.logger.debug(`/messages`);
    return 'A message';
  }
}
