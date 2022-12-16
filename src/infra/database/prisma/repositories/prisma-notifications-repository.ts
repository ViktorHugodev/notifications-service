import { Notification } from '@app/entities/notification'
import { NotificationRepository } from '@app/repositories/notifications-repository'
import { Injectable } from '@nestjs/common'

import { PrismaService } from '../prisma.service'
import { PrismaNotificationMapper } from './../mappers/prisma-notification-mapper'

@Injectable()
export class PrismaNotificationsRepository implements NotificationRepository {
  constructor(private prisma: PrismaService) {}

  async findById(notificationId: string): Promise<Notification> {
    const notification = await this.prisma.notification.findUnique({
      where: {
        id: notificationId,
      },
    })
    if (!notification) {
      return null
    }
    return PrismaNotificationMapper.toDomain(notification)
  }
  async countManyByRecipientId(recipientId: string): Promise<number> {
    const count = await this.prisma.notification.count({
      where: {
        recipientId,
      },
    })
    return count
  }
  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    const notifications = await this.prisma.notification.findMany({
      where: {
        recipientId,
      },
    })
    return notifications.map((notification) =>
      PrismaNotificationMapper.toDomain(notification),
    )
  }
  async save(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification)
    await this.prisma.notification.update({
      where: {
        id: raw.id,
      },
      data: raw,
    })
  }

  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification)
    await this.prisma.notification.create({
      data: raw,
    })
  }

  async ListAllNotifications(): Promise<Notification[]> {
    const allNotifications = await this.prisma.notification.findMany()
    if (!allNotifications) {
      return null
    }
    return allNotifications.map((notification) =>
      PrismaNotificationMapper.toDomain(notification),
    )
  }
}
