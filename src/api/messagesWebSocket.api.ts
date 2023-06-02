//const socket = new WebSocket('wss://ya-praktikum.tech/ws/chats/<USER_ID>/<CHAT_ID>/<TOKEN_VALUE>');


export class WebSocketClient {
    constructor(url, chatId) {
        this.url = url;
        this.socket = null;
        this.onopen = null;
        this.onclose = null;
        this.onmessage = null;
        this.onerror = null;
        this.chatId = chatId;
    }

    public oldMessages: Message[] | null = null;

    connect() {
        this.socket = new WebSocket(this.url);
        this.socket.addEventListener('open', event => {
            console.log('Соединение установлено');
            if (this.onopen) {
                this.onopen(event);
            }
        });

        this.socket.addEventListener('close', event => {
            console.log('Соединение закрыто');
            if (this.onclose) {
                this.onclose(event);
            }
        });

        this.socket.addEventListener('error', event => {
            console.error('Ошибка:', event);
            if (this.onerror) {
                this.onerror(event);
            }
        });

        setInterval(() => {
                const message = {
                    type: "ping"
                }
            if (this.socket.readyState === WebSocket.OPEN) {
                this.socket.send(JSON.stringify(message));
            } else if (this.socket.readyState === WebSocket.CLOSING || this.socket.readyState === WebSocket.CLOSING) {
                this.socket.connect()
            }
        }, 10000)
    }

    send(message) {
        if (this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(JSON.stringify(message));

        } else {
            console.error('Соединение не установлено');
        }
    }

    close() {
        if (this.socket.readyState === WebSocket.OPEN) {
            this.socket.close();
        }
    }
}

export interface Message {
    chat_id: number,
    time: string,
    type: string,
    user_id: string,
    content: string,
    file?: {
        id: number,
        user_id: number,
        path: string,
        filename: string,
        content_type: string,
        content_size: number,
        upload_date: string,
    }
}
