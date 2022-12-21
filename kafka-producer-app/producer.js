import * as dotenv from 'dotenv'
import { Kafka } from 'kafkajs'
import { randomUUID } from 'node:crypto'

dotenv.config()
async function bootstrap() {
  const kafka = new Kafka({
    clientId: 'kafka-producer',
    brokers: ['eternal-trout-11433-us1-kafka.upstash.io:9092'],
    sasl: {
      mechanism: 'scram-sha-256',
      username: 'ZXRlcm5hbC10cm91dC0xMTQzMyRAaV7NAfRggfRcm9w2SKw_9o0aOm8ycAnRlGk',
      password: 'da0bacd9371044b6904685796aaaf9b7',
    },
    ssl: true,
  })

  const producer = kafka.producer()

  await producer.connect()

  await producer.send({
    topic: 'notifications.send',
    messages: [
      {
        value: JSON.stringify({
          content: 'Envio de compras',
          category: 'social',
          recipientId: randomUUID(),
        }),
      },
    ],
  })

  await producer.disconnect()
}

bootstrap()
