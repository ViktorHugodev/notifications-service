import { CancelNotification } from '@app/use-cases/cancel-notification'
import { CountNotification } from '@app/use-cases/count-recipient-notification'
import { GetNotification } from '@app/use-cases/get-recipient-notification'
import { ListAllNotifications } from '@app/use-cases/list-notification'
import { ReadNotification } from '@app/use-cases/read-notification'
import { SendNotification } from '@app/use-cases/send-notification'
import { UnReadNotification } from '@app/use-cases/unread-notification'
import { Module } from '@nestjs/common'

import { DatabaseModule } from '../database/database.module'
import { NotificationController } from './controller/notification.controller'

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationController],
  providers: [
    SendNotification,
    CancelNotification,
    GetNotification,
    CountNotification,
    ReadNotification,
    UnReadNotification,
    ListAllNotifications,
  ],
})
export class HttpModule {}
