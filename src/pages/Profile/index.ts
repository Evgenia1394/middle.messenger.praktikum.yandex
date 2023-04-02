import {profileTpl} from "./profileTpl";
import {ProfileField} from "../../components/ProfileField";
import Block from "../../utils/Block";
import {ButtonBlock} from "../../components/ButtonBlock";

interface ProfileProps {
}

export class Profile extends Block<ProfileProps> {
    constructor(props: ProfileProps) {
        super({ type: 'div', ...props });
    }

    init() {
        this.children.btnChangeProfile = new ButtonBlock({
            buttonTitle: 'Изменить данные',
            events: {
                click: () => console.log('Изменить данные')
            }
        });
        this.children.btnChangePassword = new ButtonBlock({
            buttonTitle: 'Изменить пароль',
            events: {
                click: () => console.log('Изменить пароль')
            }
        });
        this.children.btnExit = new ButtonBlock({
            buttonTitle: 'Выйти',
            events: {
                click: () => console.log('Выйти')
            }
        });
        this.children.emailField = new ProfileField({name: 'Почта', value: 'pochta@yandex.ru'});
        this.children.loginField = new ProfileField({name: 'Логин', value: 'ivanivanov'});
        this.children.firstNameField = new ProfileField({name: 'Имя', value: 'Иван'});
        this.children.secondNameField = new ProfileField({name: 'Фамилия', value: 'Иванов'});
        this.children.chatNameField = new ProfileField({name: 'Фамилия', value: 'Иванов'});
        this.children.phoneNumberField = new ProfileField({name: 'Номер телефона', value: '+7 (909) 967 30 30'});
    }


    render() {
        return this.compile(profileTpl, { ...this.props });
    }
}
