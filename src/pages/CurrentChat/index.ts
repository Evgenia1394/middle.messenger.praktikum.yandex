import Block from '../../utils/Block';
import {currentChatTpl} from "./CurrentChatTpl";
import {ArrowButton} from "../../components/ArrowButton";
import {requiredValidation} from "../../utils/Validators";
import {GreyInput} from "../../components/greyInput";
import {connect} from "../../Store/connect";
import {ButtonBlock} from "../../components/ButtonBlock";
import {MessagesAPI} from "../../api/messages.api";
import {Message} from "../../components/Message";
import {MessagesController} from "./messagesWebsocket.controller";

interface CurrentChatProps {
    type?: string;
    label?: string;
    className?: string;
    typeAction?: string;
    formName?: string;
    events?: {
        click?: () => void;
        submit?: () => void;
    };
    /**id чата*/
    id?: string;
    name?: string;
}

export class CurrentChat extends Block<CurrentChatProps> {
    constructor(props: CurrentChatProps) {
        super({ type: 'button', ...props });
    }
    public messagesAPI = new MessagesAPI()
    public messagesController;

    init() {
        this.children.arrowButton = new ArrowButton({
            events: {
                click: () => {
                    this.messagesController.sendMessage()
                },
            }
        });
        this.children.messageInput = new GreyInput({type: 'text', name: 'message', id: 'message', placeholder: 'Сообщение', events: {
                focusin: (e) => requiredValidation(e.target.id),
                focusout: (e) => requiredValidation(e.target.id),
            }})
        this.children.addNewUserToChatBtn = new ButtonBlock({
            buttonTitle: 'Добавить пользователя',
            events: {
                click: () => this.changeUserInChat()
            }
        });
        this.children.deleteUserFromChatBtn = new ButtonBlock({
            buttonTitle: 'Удалить пользователя',
            events: {
                click: () => this.changeUserInChat(true)
            }
        });
        this.children.messages = new Message({
            userName: 'Начните общение',
            text: '',
            time: '',
        })
        return this.initialSocketAndConnect()
    }

    async initialSocketAndConnect () {
        if (!this.props.id || !this.props.user) {
            return;
        }
        this.messagesController = await new MessagesController({
            chatId: this.props.id!,
            userId: this.props.user.id,
        })
        await this.messagesController.getTokenAndConnect()
        await this.messagesController.getCountUnreadMessages()
    }

    public scrollToBottom() {
        const lastMessage = document.querySelectorAll('message__wrapper')[length-1];
        lastMessage.scrollIntoView({ behavior: 'smooth' });
    }


    render() {
        if (this.props.oldMessages && this.props.oldMessages.length) {
            this.children.messages = this.props.oldMessages.map((message) =>
                new Message({
                    userName: message.id,
                    text: message.content,
                    time: message.time,
                }))
        }
        return this.compile(currentChatTpl, { ...this.props });
    }

    async changeUserInChat(isDelete = false) {
        const text = 'Введи имя пользователя';
        const login = await prompt(text, 'Свинка Пэпа');
        if (login) {
            const users = await new MessagesAPI().searchUserByLoginRequest({login: login})
            .then((res)=> {return res})
            if (!users.length) {
                return alert('Таких пользователей не найдено!')
            }
            if (isDelete) {
                return await this.messagesAPI.deleteUserFromChatRequest({
                    users: [users[0].id],
                    chatId: Number(this.props.id)
                }).then((res)=> {
                    alert('Пользователь успешно удален!')
                    return res
                })
            } else {
                return await new MessagesAPI().addUserToChatRequest({
                    users: [users[0].id],
                    chatId: Number(this.props.id)
                }).then((res)=> {
                    alert('Пользователь успешно добавлен!')
                    return res
                })
            }

        }
        return;
    }
}

export function mapChatListToProps(state) {
    return {
        user: state.user,
        oldMessages: state.oldMessages
    };
}

export const ConnectedCurrentChat = connect(CurrentChat, mapChatListToProps);
