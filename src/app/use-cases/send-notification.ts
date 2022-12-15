import { Injectable } from '@nestjs/common'

import { Notification } from '../entities/notification'
import { NotificationRepository } from '../repositories/notifications-repository'
import { Content } from './../entities/content'

interface NotificationRequest {
  recipientId: string
  content: string
  category: string
}

interface NotificationResponse {
  notification: Notification
}

@Injectable()
export class SendNotification {
  constructor(private notificationRepository: NotificationRepository) {}
  async execute({
    category,
    content,
    recipientId,
  }: NotificationRequest): Promise<NotificationResponse> {
    const notification = new Notification({
      category,
      recipientId,
      content: new Content(content),
    })
    await this.notificationRepository.create(notification)
    return {
      notification,
    }
  }
}
