import { Controller, Get, Logger } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  logger: Logger;

  constructor() {
    this.logger = new Logger(MessagesController.name);
  }

  @Get()
  listMessages() {
    return 'A list of messages';
  }
}
