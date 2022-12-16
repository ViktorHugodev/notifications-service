import { makeNotification } from '@test/factories/notification-factory'

import { InMemoryNotifications } from '../../../test/repositories/in-memory-notifications'
import { CountNotification } from './count-recipient-notification'

describe('Cancel notification', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotifications()
    const countNotification = new CountNotification(notificationsRepository)

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    )
    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    )

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-2' }),
    )

    const { count } = await countNotification.execute({
      recipientId: 'recipient-1',
    })

    expect(count).toEqual(2)
  })
})
