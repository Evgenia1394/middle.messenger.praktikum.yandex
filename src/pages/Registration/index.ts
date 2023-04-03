import {registrationTpl} from "./RegistrationTpl";
import Block from "../../utils/Block";
import {ButtonBlock} from "../../components/ButtonBlock";
import {submitForm, validateInput} from "../../utils/Validators";
import {InputBlock} from "../../components/InputBlock";

interface RegistrationProps {
}

export class Registration extends Block<RegistrationProps> {
    constructor(props: RegistrationProps) {
        super({ type: 'div', ...props });
    }

    //не понимаю почему рендерится с дефолтным значением value='ivanivanov' и подобным образом
    init() {
        this.children.registrationButton = new ButtonBlock({
            buttonTitle: 'Зарегистрироваться',
            events: {
                click: () => submitForm()
            }
        });
        this.children.emailInput = new InputBlock({
            type: 'email', name: 'email', id: 'email', value: 'pochta@yandex.ru', label: 'Почта',
            events: {
                focusin: (e) => validateInput(e.target.value, e.target.name),
                focusout: (e) => validateInput(e.target.value, e.target.name),
            },
        });
        this.children.loginInput = new InputBlock({
            type: 'text', name: 'login', id: 'login', value: 'ivanivanov', label: 'Логин',
            events: {
                focusin: (e) => validateInput(e.target.value, e.target.name),
                focusout: (e) => validateInput(e.target.value, e.target.name),
            },
        });
        this.children.firstNameInput = new InputBlock({
            type: 'text', name: 'first_name', id: 'firstName', value: 'ivan', label: 'Имя',
            events: {
                focusin: (e) => validateInput(e.target.value, e.target.name),
                focusout: (e) => validateInput(e.target.value, e.target.name),
            },
        });
        this.children.secondNameInput = new InputBlock({
            type: 'text', name: 'second_name', id: 'secondName', value: 'ivanov', label: 'Фамилия',
            events: {
                focusin: (e) => validateInput(e.target.value, e.target.name),
                focusout: (e) => validateInput(e.target.value, e.target.name),
            },
        });
        this.children.phoneNumberInput = new InputBlock({
            type: 'tel', name: 'phone', id: 'phoneNumber', value: '+79099673030', label: 'Телефон',
            events: {
                focusin: (e) => validateInput(e.target.value, e.target.name),
                focusout: (e) => validateInput(e.target.value, e.target.name),
            },
        });
        this.children.passwordFirstInput = new InputBlock({
            type: 'password', name: 'password', id: 'passwordFirst', value: 'ivanov',label: 'Пароль',
            events: {
                focusin: (e) => validateInput(e.target.value, e.target.name),
                focusout: (e) => validateInput(e.target.value, e.target.name),
            },
        });
        this.children.passwordSecondInput = new InputBlock({
            type: 'password', name: 'password', id: 'passwordSecond', value: 'ivanov', label: 'Пароль (еще раз)',
            events: {
                focusin: (e) => validateInput(e.target.value, e.target.name),
                focusout: (e) => validateInput(e.target.value, e.target.name),
            },
        });
    }


    render() {
        return this.compile(registrationTpl, { ...this.props });
    }
}
