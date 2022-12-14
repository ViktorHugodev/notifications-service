import { NotificationRepository } from '@app/repositories/notifications-repository'
import { Injectable } from '@nestjs/common'

import { NotificationNotFound } from './errors/notification-not-found'

interface GetNotificationRequest {
  notificationId: string
}

type GetNotificationsResponse = void

@Injectable()
export class ReadNotification {
  constructor(private notificationRepository: NotificationRepository) {}
  async execute({
    notificationId,
  }: GetNotificationRequest): Promise<GetNotificationsResponse> {
    const notification = await this.notificationRepository.findById(
      notificationId,
    )
    if (!notification) {
      throw new NotificationNotFound()
    }
    notification.read()
    await this.notificationRepository.save(notification)
  }
}
