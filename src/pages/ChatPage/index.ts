import {chatPageTpl} from "./chatPageTpl";
import {GreyInput} from "../../components/greyInput";
import {ArrowButton} from "../../components/ArrowButton";
import Block from "../../utils/Block";
import {requiredValidation} from "../../utils/Validators";
import {MessagesData} from "../Messages";

interface ChatPageProps {
}

export class ChatPage extends Block<ChatPageProps> {
    constructor(props: ChatPageProps) {
        super({ type: 'div', ...props });
    }

    init() {
        this.children.arrowButton = new ArrowButton({
            events: {
                click: () => requiredValidation('message')
            }
        });
        this.children.greyInput = new GreyInput({type: 'text', name: 'search', id: 'search', placeholder: 'Поиск'})
        this.children.messageInput = new GreyInput({type: 'text', name: 'message', id: 'message', placeholder: 'Сообщение'})
        this.children.chatList = new MessagesData({});
    }




    render() {
        return this.compile(chatPageTpl, { ...this.props });
    }
}
