import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { DatabaseModule } from './infra/database/database.module'
import { HttpModule } from './infra/http/http.module'
import { MessingModule } from './infra/messaging/messaging.module'

@Module({
  imports: [
    HttpModule,
    DatabaseModule,
    MessingModule,
    // ConfigModule.forRoot({
    //   isGlobal: true,
    // }),
  ],
})
export class AppModule {}
