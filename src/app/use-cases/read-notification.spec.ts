import { Content } from '@app/entities/content'
import { makeNotification } from '@test/factories/notification-factory'

import { InMemoryNotifications } from '../../../test/repositories/in-memory-notifications'
import { CancelNotification } from './cancel-notification'
import { NotificationNotFound } from './errors/notification-not-found'

describe('Read a notification', () => {
  it('should be able to read a notification', async () => {
    const notificationsRepository = new InMemoryNotifications()
    const cancelNotification = new CancelNotification(notificationsRepository)

    const notification = makeNotification()

    await notificationsRepository.create(notification)

    await cancelNotification.execute({
      notificationId: notification.id,
    })

    expect(notificationsRepository.notifications).toHaveLength(1)
    expect(notificationsRepository.notifications[0].cancelAt).toEqual(
      expect.any(Date),
    )
  })

  it('should not be able to cancel a non existing notification', async () => {
    const notificationsRepository = new InMemoryNotifications()
    const cancelNotification = new CancelNotification(notificationsRepository)

    expect(() => {
      return cancelNotification.execute({
        notificationId: 'fake-notification-id',
      })
    }).rejects.toThrow(NotificationNotFound)
  })
})
