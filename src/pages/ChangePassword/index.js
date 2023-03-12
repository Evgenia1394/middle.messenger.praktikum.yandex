import Handlebars from "handlebars";
import {changePasswordTpl} from "./changePasswordTpl";
import {Button} from "../../components/Button";
import {Input} from "../../components/input";

export const ChangePassword = () => {
    return Handlebars.compile(changePasswordTpl)({
        btn: Button({buttonTitle: 'Сохранить изменения'}),
        passwordOldInput: Input({type: 'password', name: 'passwordOld', id: 'passwordOld', value: 'ivanov',label: 'Старый пароль'}),
        passwordFirstInput: Input({type: 'password', name: 'passwordFirst', id: 'passwordFirst', value: 'ivanov',label: 'Новый пароль'}),
        passwordSecondInput: Input({type: 'password', name: 'passwordSecond', id: 'passwordSecond', value: 'ivanov', label: 'Повторите пароль'}),
    })
}