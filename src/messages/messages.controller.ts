import { Controller, Get, Logger } from '@nestjs/common';

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
}
