import { Injectable, OnModuleDestroy } from '@nestjs/common'
import { ServerKafka } from '@nestjs/microservices'

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['eternal-trout-11433-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'ZXRlcm5hbC10cm91dC0xMTQzMyRAaV7NAfRggfRcm9w2SKw_9o0aOm8ycAnRlGk',
          password: 'da0bacd9371044b6904685796aaaf9b7',
        },
        ssl: true,
      },
    })
  }
  async onModuleDestroy() {
    await this.close()
  }
}
