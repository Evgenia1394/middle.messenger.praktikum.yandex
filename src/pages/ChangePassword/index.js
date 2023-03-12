import Handlebars from "handlebars";
import {changePasswordTpl} from "./changePasswordTpl";
import {Button} from "../../components/Button";
import {Input} from "../../components/input";

export const ChangePassword = () => {
    return Handlebars.compile(changePasswordTpl)({
        btn: Button({buttonTitle: 'Сохранить изменения'}),
        passwordOldInput: Input({type: 'password', name: 'oldPassword', id: 'passwordOld', value: 'ivanov',label: 'Старый пароль'}),
        passwordFirstInput: Input({type: 'password', name: 'newPassword', id: 'passwordFirst', value: 'ivanov',label: 'Новый пароль'}),
        passwordSecondInput: Input({type: 'password', name: 'newPassword', id: 'passwordSecond', value: 'ivanov', label: 'Повторите пароль'}),
    })
}
