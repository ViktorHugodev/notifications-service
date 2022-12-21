import { KafkaConsumerService } from '@infra/messaging/kafka/kafka-consumer.service'
import { Module } from '@nestjs/common'

@Module({
  imports: [],
  providers: [KafkaConsumerService],
  controllers: [],
})
export class MessingModule {}
