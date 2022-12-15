import { Module } from '@nestjs/common'

import { DatabaseModule } from '../database/database.module'
import { SendNotification } from './../../app/use-cases/send-notification'
import { NotificationController } from './controller/notification.controller'

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationController],
  providers: [SendNotification],
})
export class HttpModule {}
