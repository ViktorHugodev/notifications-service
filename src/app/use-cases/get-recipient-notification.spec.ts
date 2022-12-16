import { makeNotification } from '@test/factories/notification-factory'

import { InMemoryNotifications } from '../../../test/repositories/in-memory-notifications'
import { GetNotification } from './get-recipient-notification'

describe('Get notification', () => {
  it('should be to get recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotifications()
    const getNotifications = new GetNotification(notificationsRepository)

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    )
    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    )

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-2' }),
    )

    const { notifications } = await getNotifications.execute({
      recipientId: 'recipient-1',
    })

    expect(notifications).toHaveLength(2)
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'recipient-1' }),
        expect.objectContaining({ recipientId: 'recipient-1' }),
      ]),
    )
  })
})
