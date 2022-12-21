import { KafkaConsumerService } from '@infra/messaging/kafka/kafka-consumer.service'
import { Module } from '@nestjs/common'

import { SendNotification } from './../../app/use-cases/send-notification'
import { DatabaseModule } from './../database/database.module'
import { NotificationController } from './kafka/controllers/notifications.controller'

@Module({
  imports: [DatabaseModule],
  providers: [KafkaConsumerService, SendNotification],
  controllers: [NotificationController],
})
export class MessingModule {}
