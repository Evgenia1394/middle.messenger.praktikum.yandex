import Handlebars from "handlebars";
import {Button} from "../../components/Button";
import {profileTpl} from "./profileTpl";
import {ProfileField} from "../../components/ProfileField";

export const Profile = () => {
    return Handlebars.compile(profileTpl)({
        btnChangeProfile: Button({buttonTitle: 'Изменить данные'}),
        btnChangePassword: Button({buttonTitle: 'Изменить пароль'}),
        btnExit: Button({buttonTitle: 'Выйти'}),
        emailField: ProfileField({name: 'Почта', value: 'pochta@yandex.ru'}),
        loginField: ProfileField({name: 'Логин', value: 'ivanivanov'}),
        firstNameField: ProfileField({name: 'Имя', value: 'Иван'}),
        secondNameField: ProfileField({name: 'Фамилия', value: 'Иванов'}),
        chatNameField: ProfileField({name: 'Имя в чате', value: 'Иван'}),
        phoneNumberField: ProfileField({name: 'Номер телефона', value: '+7 (909) 967 30 30'}),
    })
}