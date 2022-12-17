import { MessagingModule } from '@infra/messaging/kafka/messaging.module';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

import { HttpModule } from './http.module';


@Module({
  imports: [HttpModule,DatabaseModule,MessagingModule],
  
})
export class AppModule {}
