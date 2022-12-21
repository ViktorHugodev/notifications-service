import { Module } from '@nestjs/common'

import { DatabaseModule } from './infra/database/database.module'
import { HttpModule } from './infra/http/http.module'
import { MessingModule } from './infra/messaging/messaging.module'

@Module({
  imports: [HttpModule, DatabaseModule, MessingModule],
})
export class AppModule {}
