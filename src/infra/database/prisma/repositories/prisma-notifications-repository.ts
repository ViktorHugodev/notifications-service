import { Injectable } from '@nestjs/common'

import { Notification } from '../../../../../src/app/entities/notification'
import { NotificationRepository } from '../../../../../src/app/repositories/notifications-repository'
import { PrismaService } from '../prisma.service'

@Injectable()
export class PrismaNotificationsRepository implements NotificationRepository {
  constructor(private prismaService: PrismaService) {}
  async create(notification: Notification): Promise<void> {
    const { category, content, recipientId, createdAt, readAt, id } =
      notification
    await this.prismaService.notification.create({
      data: {
        id,
        category,
        content: content.value,
        recipientId,
        createdAt,
        readAt,
      },
    })
  }
}
