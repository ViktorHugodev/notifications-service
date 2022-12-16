import { NotificationRepository } from '@app/repositories/notifications-repository'
import { Injectable } from '@nestjs/common'

import { NotificationNotFound } from './errors/notification-not-found'

interface UnReadNotificationRequest {
  notificationId: string
}
type UnReadNotificationResponse = void

@Injectable()
export class UnReadNotification {
  constructor(private notificationRepository: NotificationRepository) {}
  async execute({
    notificationId,
  }: UnReadNotificationRequest): Promise<UnReadNotificationResponse> {
    const notification = await this.notificationRepository.findById(
      notificationId,
    )

    if (!notification) {
      throw new NotificationNotFound()
    }
    notification.unread()

    await this.notificationRepository.save(notification)
  }
}
