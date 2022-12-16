import { Injectable } from '@nestjs/common'

import { NotificationRepository } from '../repositories/notifications-repository'
import { Notification } from './../entities/notification'

interface GetNotificationRequest {
  recipientId: string
}

interface GetNotificationResponse {
  notifications: Notification[]
}
@Injectable()
export class GetNotification {
  constructor(private notificationRepository: NotificationRepository) {}
  async execute({
    recipientId,
  }: GetNotificationRequest): Promise<GetNotificationResponse> {
    const notifications = await this.notificationRepository.findManyByRecipientId(
      recipientId,
    )
    return { notifications }
  }
}
