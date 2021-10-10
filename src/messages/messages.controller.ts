import {
  Body,
  Controller,
  Get,
  Logger,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

// Class Decorator. Applies to all Class
@Controller('messages')
export class MessagesController {
  logger: Logger;
  messageService: MessagesService;

  constructor() {
    this.logger = new Logger(MessagesController.name);

    // DON'T DO THIS ON REAL APPS
    // USE DEPENDENCY INJECTION
    this.messageService = new MessagesService();
  }

  // Method Decorator. Applies to an entire Method
  @Get()
  listMessages() {
    this.logger.debug(`GET /messages`);
    return this.messageService.findAll();
  }

  // Method Decorator. Applies to an entire Method
  @Post()
  // Argument Decorator. Applies to an entire Argument Function
  createMessage(@Body() body: CreateMessageDto) {
    this.logger.debug(`POST /messages ${JSON.stringify(body)}`);
    return this.messageService.create(body.content);
  }

  // Method Decorator. Applies to an entire Method
  @Get('/:id')
  // Argument Decorator. Applies to an entire Argument Function
  async getMessage(@Param('id') id: string) {
    this.logger.debug(`GET /messages/${id}`);
    // If not message exists, we will get an undefined
    const message = await this.messageService.findOne(id);
    if (!message) {
      throw new NotFoundException('message not found');
    }

    // If message exists we return it
    return message;
  }
}
