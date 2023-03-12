import Handlebars from "handlebars";
import {Button} from "../../components/Button";
import {Input} from "../../components/input";
import {registrationTpl} from "./RegistrationTpl";

export const Registration = () => {
    return Handlebars.compile(registrationTpl)({
        btn: Button({buttonTitle: 'Зарегистрироваться'}),
        emailInput: Input({type: 'email', name: 'email', id: 'email', value: 'pochta@yandex.ru', label: 'Почта'}),
        loginInput: Input({type: 'text', name: 'login', id: 'login', value: 'ivanivanov', label: 'Логин'}),
        firstNameInput: Input({type: 'text', name: 'first_name', id: 'firstName', value: 'ivanivanov', label: 'Имя'}),
        secondNameInput: Input({type: 'text', name: 'second_name', id: 'secondName', value: 'ivanov', label: 'Фамилия'}),
        phoneNumberInput: Input({type: 'tel', name: 'phone', id: 'phoneNumber', value: '+79099673030', label: 'Телефон'}),
        passwordFirstInput: Input({type: 'password', name: 'password', id: 'passwordFirst', value: 'ivanov',label: 'Пароль'}),
        passwordSecondInput: Input({type: 'password', name: 'password', id: 'passwordSecond', value: 'ivanov', label: 'Пароль (еще раз)'}),
    })
}
