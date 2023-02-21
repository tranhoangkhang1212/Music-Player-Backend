import { Injectable } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';

@Injectable()
export class AppService {
    constructor(private readonly chatGateWay: ChatGateway) {}

    getHello(): string {
        this.chatGateWay.sendMsg()
        return 'Hello World!';
    }
}
