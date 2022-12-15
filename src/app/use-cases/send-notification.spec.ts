import { InMemoryNotifications } from '../../../test/repositories/in-memory-notifications'
import { SendNotification } from './send-notification'

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotifications()
    const sendNotification = new SendNotification(notificationsRepository)
    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'Some content',
      recipientId: 'some-recipient',
    })

    expect(notificationsRepository.notifications).toHaveLength(1)
    expect(notificationsRepository.notifications[0]).toEqual(notification)
  })
})
