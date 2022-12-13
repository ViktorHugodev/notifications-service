import { CreateNotificationBody } from './create-notification-body';
import { PrismaService } from './prisma.service';
import { Controller, Get, Post, Body } from '@nestjs/common';
import {randomUUID as uuid} from 'node:crypto'

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany()
  }
  @Post('')
  async create(@Body() body: CreateNotificationBody) {
   
    const {content,category, recipientId} = body
    return await this.prisma.notification.create({
      data :{
        id: uuid(),
        content,
        category,
        recipientId
      }
    })
  }
}
