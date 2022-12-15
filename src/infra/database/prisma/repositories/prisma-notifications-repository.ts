import { Notification } from '@app/entities/notification'
import { NotificationRepository } from '@app/repositories/notifications-repository'
import { Injectable } from '@nestjs/common'

import { PrismaService } from '../prisma.service'
import { PrismaNotificationMapper } from './../mappers/prisma-notification-mapper'

@Injectable()
export class PrismaNotificationsRepository implements NotificationRepository {
  constructor(private prismaService: PrismaService) {}
  save(notification: Notification): Promise<void> {
    throw new Error('Method not implemented.')
  }
  async findById(notificationId: string): Promise<Notification> {
    throw new Error('Method not implemented.')
  }
  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification)
    await this.prismaService.notification.create({
      data: raw,
    })
  }
}
