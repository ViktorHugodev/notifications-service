import { Notification } from 'src/app/entities/notification'
import { NotificationRepository } from 'src/app/repositories/notifications-repository'

export class InMemoryNotifications implements NotificationRepository {
  ListAllNotifications(): Promise<Notification[]> {
    throw new Error('Method not implemented.')
  }

  public notifications: Notification[] = []
  async findById(notificationId: string): Promise<Notification> {
    const notification = this.notifications.find(
      (notification) => notification.id === notificationId,
    )
    if (!notification) {
      return null
    }
    return notification
  }
  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex(
      (item) => item.id == notification.id,
    )
    if (notificationIndex >= 0) {
      this.notifications[notificationIndex] = notification
    }
  }
  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification)
  }
  async countManyByRecipientId(recipientId: string): Promise<number> {
    const count = this.notifications.filter(
      (item) => item.recipientId == recipientId,
    )
    return count.length
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    const notifications = this.notifications.filter(
      (item) => item.recipientId == recipientId,
    )
    return notifications
  }

}
