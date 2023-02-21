import { ChatGateway } from './chat.gateway';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/app/get-init')
export class AppController {
    constructor(private readonly appService: AppService,
        private readonly chatGateWay: ChatGateway) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
}
