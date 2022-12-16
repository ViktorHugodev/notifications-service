import { Content } from '@app/entities/content'
import { Notification, INotificationProps } from '@app/entities/notification'

type Override = Partial<INotificationProps>

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    recipientId: 'teste-321',
    content: new Content('Notificação de test 03'),
    ...override,
  })
}
