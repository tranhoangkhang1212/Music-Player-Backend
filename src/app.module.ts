import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './chat.gateway';
import { ChatModule } from './chat.module';

@Module({
  imports: [ChatModule],
  controllers: [AppController],
  providers: [AppService, ChatGateway],
})
export class AppModule {}
