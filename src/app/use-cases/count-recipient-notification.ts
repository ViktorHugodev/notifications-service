import { Injectable } from '@nestjs/common'

import { NotificationRepository } from '../repositories/notifications-repository'

interface CountNotificationRequest {
  recipientId: string
}

interface CountNotificationResponse {
  count: number
}
@Injectable()
export class CountNotification {
  constructor(private notificationRepository: NotificationRepository) {}
  async execute({
    recipientId,
  }: CountNotificationRequest): Promise<CountNotificationResponse> {
    const count = await this.notificationRepository.countManyByRecipientId(recipientId)
    return { count }
  }
}
