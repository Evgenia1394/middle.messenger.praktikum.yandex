import Block from "../../utils/Block";
import {MessagesAPI} from "../../api/messages.api";
import {WebSocketClient} from "../../api/messagesWebSocket.api";
import {requiredValidation} from "../../utils/Validators";
import Store from "../../Store/store";

interface MessagesControllerProps {
    type?: string;
    label?: string;
    className?: string;
    typeAction?: string;
    formName?: string;
    events?: {
        click?: () => void;
        submit?: () => void;
    };
    chatId: string;
    userId: string;
}


export class MessagesController extends Block<MessagesControllerProps> {
    constructor(props: MessagesControllerProps) {
        super({type: 'button', ...props});
        this.socket;
        this.messages;
        this.IsSavedMessages = false;
    }
    public token;

    public async getToken() {
            this.token = await new MessagesAPI().chatTokenRequest(this.props.chatId)
    }

    public connectWebsocket() {
        this.socket.connect();
    }

    public async getTokenAndConnect() {
        await this.getToken();
        if (!this.socket) {
            /** именно WebSocketClient - если обработчики вешаем - то this.socket.socket */
            this.socket = await new WebSocketClient(`wss://ya-praktikum.tech/ws/chats/${this.props.userId}/${this.props.chatId}/${this.token}`, this.props.chatId);
            await this.connectWebsocket();
        } else {
            console.log('Socket already exists');
        }
    }

    public sendMessage() {
        event.preventDefault();
            if (!requiredValidation('message')) {
                return;
            }
            let Value = (document.getElementById('message') as HTMLInputElement).value;
            const messageData = {
                content: Value,
                type: "message"
            }
            this.socket.send(messageData);
            (document.getElementById('message') as HTMLInputElement).value = ''
        new MessagesAPI().getUnreadMessages(this.props.chatId).then(res => res.unread_count);
            const sendData = {
                content: "0",
                type: "get old",
            }
        this.socket.send(sendData);
        this.setUnreadMessages()
    }

    public closeSocketConnection() {
        this.socket.close();
    }


    getCountUnreadMessages() {
        const countUnreadMessages = new MessagesAPI().getUnreadMessages(this.props.chatId).then(res => res.unread_count);
        const sendData = {
            content: "0",
            type: "get old",
        }
        this.socket.socket.onopen = () => {
            this.socket.send(sendData);
        };
        this.setUnreadMessages()
    }

    setUnreadMessages() {
        const handleMessage = event => {
            const oldMessages = JSON.parse(event.data);
            if (Array.isArray(oldMessages) && oldMessages.length) {
                this.messages = oldMessages.sort(function(a, b) {
                    return new Date(a.time) - new Date(b.time);
                });
                Store.set('oldMessages', this.messages)
            }
        }
        this.socket.socket.addEventListener('message', handleMessage);
    }
}

