import {loginTpl} from "./LoginTpl";
import Block from "../../utils/Block";
import {ButtonBlock} from "../../components/ButtonBlock";
import {InputBlock} from "../../components/InputBlock";
import {submitForm, validateInput} from "../../utils/Validators";


interface LoginProps {
}

export class Login extends Block<LoginProps> {
    constructor(props: LoginProps) {
        super({ type: 'div', ...props });
    }

    init() {
        this.children.authorizeButton = new ButtonBlock({
            buttonTitle: 'Авторизоваться',
            events: {
                click: () => submitForm()
            }
        });
        this.children.loginInput = new InputBlock({
            type: 'text',
            name: 'login',
            id: 'login',
            placeholder: 'Введите логин',
            label: 'Логин',
            value: null,
            events: {
                focusin: (e) => validateInput(e.target.value, e.target.name),
                focusout: (e) => validateInput(e.target.value, e.target.name),
            },
        });
        this.children.passwordInput = new InputBlock({
            type: 'password',
            name: 'password',
            id: 'password',
            placeholder: 'Введите пароль',
            label: 'Пароль',
            value: null,
            events: {
                focusin: (e) => validateInput(e.target.value, e.target.name),
                focusout: (e) => validateInput(e.target.value, e.target.name),
            },
        });
    }


    render() {
        return this.compile(loginTpl, { ...this.props });
    }
}

