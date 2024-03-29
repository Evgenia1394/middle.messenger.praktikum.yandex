import Handlebars from "handlebars";
import {changeDataTpl} from "./changeDataTpl";
import {Button} from "../../components/Button";
import {Input} from "../../components/input";

export const ChangeData = () => {
    return Handlebars.compile(changeDataTpl)({
        btn: Button({buttonTitle: 'Сохранить изменения'}),
        emailInput: Input({type: 'email', name: 'email', id: 'email', value: 'pochta@yandex.ru', label: 'Почта'}),
        loginInput: Input({type: 'text', name: 'login', id: 'login', value: 'ivanivanov', label: 'Логин'}),
        firstNameInput: Input({type: 'text', name: 'first_name', id: 'firstName', value: 'ivanivanov', label: 'Имя'}),
        secondNameInput: Input({type: 'text', name: 'second_name', id: 'secondName', value: 'ivanov', label: 'Фамилия'}),
        chatNameInput: Input({type: 'text', name: 'display_name', id: 'chatName', value: 'ivanivanov', label: 'Имя в чате'}),
        phoneNumberInput: Input({type: 'tel', name: 'phone', id: 'phoneNumber', value: '+79099673030', label: 'Телефон'}),
    })
}
