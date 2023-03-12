import Handlebars from "handlebars";
import {changeDataTpl} from "./changeDataTpl";
import {Button} from "../../components/Button";
import {Input} from "../../components/input";

export const ChangeData = () => {
    return Handlebars.compile(changeDataTpl)({
        btn: Button({buttonTitle: 'Сохранить изменения'}),
        emailInput: Input({type: 'email', name: 'email', id: 'email', value: 'pochta@yandex.ru', label: 'Почта'}),
        loginInput: Input({type: 'text', name: 'login', id: 'login', value: 'ivanivanov', label: 'Логин'}),
        firstNameInput: Input({type: 'text', name: 'firstName', id: 'firstName', value: 'ivanivanov', label: 'Имя'}),
        secondNameInput: Input({type: 'text', name: 'secondName', id: 'secondName', value: 'ivanov', label: 'Фамилия'}),
        chatNameInput: Input({type: 'text', name: 'chatName', id: 'chatName', value: 'ivanivanov', label: 'Имя в чате'}),
        phoneNumberInput: Input({type: 'tel', name: 'phoneNumber', id: 'phoneNumber', value: '+79099673030', label: 'Телефон'}),
    })
}