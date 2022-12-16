import { NotificationRepository } from 'src/app/repositories/notifications-repository'

import { Injectable } from '@nestjs/common'

import { NotificationNotFound } from './errors/notification-not-found'

@Injectable()
export class ListAllNotifications {
  constructor(private notificationRepository: NotificationRepository) {}
  async execute() {
    const allNotifications =
      await this.notificationRepository.ListAllNotifications()
    if (!allNotifications) {
      throw new NotificationNotFound()
    }
    return allNotifications
  }
}
