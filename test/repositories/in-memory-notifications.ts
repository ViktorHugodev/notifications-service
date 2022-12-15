import { Notification } from 'src/app/entities/notification'
import { NotificationRepository } from 'src/app/repositories/notifications-repository'

export class InMemoryNotifications implements NotificationRepository {

  public notifications: Notification[] = []
  async findById(notificationId: string): Promise<Notification> {
    const notification = this.notifications.find(
      (notification) => notification.id === notificationId,
    )
    return notification
  }
  save(notification: Notification): Promise<void> {
    throw new Error('Method not implemented.')
  }
  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification)
  }
}
