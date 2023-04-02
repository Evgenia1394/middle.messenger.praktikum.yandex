import {changeDataTpl} from "./changeDataTpl";
import Block from "../../utils/Block";
import {ButtonBlock} from "../../components/ButtonBlock";
import {InputBlock} from "../../components/InputBlock";
import {submitForm, validateInput} from "../../utils/Validators";

interface ChangeDataProps {
}

export class ChangeData extends Block<ChangeDataProps> {
    constructor(props: ChangeDataProps) {
        super({ type: 'div', ...props });
    }

    init() {
        this.children.btn = new ButtonBlock({
            buttonTitle: 'Сохранить изменения',
            events: {
                click: () => submitForm()
            }
        });
        this.children.emailInput = new InputBlock({type: 'email', name: 'email', id: 'email', value: 'pochta@yandex.ru', label: 'Почта',
            events: {
                focusin: (e) => validateInput(e.target.value, e.target.name),
                focusout: (e) => validateInput(e.target.value, e.target.name),
            }});
        this.children.loginInput = new InputBlock({type: 'text', name: 'login', id: 'login', value: 'ivanivanov', label: 'Логин',
            events: {
                focusin: (e) => validateInput(e.target.value, e.target.name),
                focusout: (e) => validateInput(e.target.value, e.target.name),
            }});
        this.children.firstNameInput = new InputBlock({type: 'text', name: 'first_name', id: 'firstName', value: 'ivanivanov', label: 'Имя',
            events: {
                focusin: (e) => validateInput(e.target.value, e.target.name),
                focusout: (e) => validateInput(e.target.value, e.target.name),
            }});
        this.children.secondNameInput = new InputBlock({type: 'text', name: 'second_name', id: 'secondName', value: 'ivanov', label: 'Фамилия',
            events: {
                focusin: (e) => validateInput(e.target.value, e.target.name),
                focusout: (e) => validateInput(e.target.value, e.target.name),
            }});
        this.children.chatNameInput = new InputBlock({type: 'text', name: 'display_name', id: 'chatName', value: 'ivanivanov', label: 'Имя в чате',
            events: {
                focusin: (e) => validateInput(e.target.value, e.target.name),
                focusout: (e) => validateInput(e.target.value, e.target.name),
            }});
        this.children.phoneNumberInput = new InputBlock({type: 'tel', name: 'phone', id: 'phoneNumber', value: '+79099673030', label: 'Телефон',
            events: {
                focusin: (e) => validateInput(e.target.value, e.target.name),
                focusout: (e) => validateInput(e.target.value, e.target.name),
            }});
    }


    render() {
        return this.compile(changeDataTpl, { ...this.props });
    }
}
