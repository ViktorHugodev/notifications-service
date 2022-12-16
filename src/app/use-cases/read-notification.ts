import { NotificationRepository } from '@app/repositories/notifications-repository'
import { Injectable } from '@nestjs/common'

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
    notification.read()
    await this.notificationRepository.save(notification)
  }
}
