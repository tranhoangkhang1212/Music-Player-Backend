import { MessageBody, OnGatewayConnection, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { ClientRequest } from './interfaces/WebSocket';
import { LoggerService } from './logger/logger.service';

interface RequestBody {
  msg: string,
  sendTo: string
}

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayConnection {

    constructor(private readonly logger: LoggerService) {}

    @WebSocketServer() server: Server;

    afterInit(server: any) {
      console.log(server);
      
      console.log("Socket Init")
    }

    handleConnection(client: ClientRequest) {
        this.logger.log(client.id + 27)
    this.logger.log(client.handshake.headers.token + 28)
    }

    handleDisconnect(client: ClientRequest){
      console.log(`Client disconnected ${client.id}`)
    }

    @SubscribeMessage('sendMsg')
    handleMessage(@MessageBody() message: RequestBody): RequestBody {
        console.log("Sent Msg");
        this.server.emit('receiveMsg', message)
        return {msg: message.msg + "_response", sendTo: message.sendTo + "_response"};
    }

    sendMsg(): string {
      this.server.emit("receiveMsg", "Send From API__")
        return "Sent"
    }
}