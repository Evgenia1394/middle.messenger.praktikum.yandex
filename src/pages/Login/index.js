import Handlebars from "handlebars";
import {Button} from "../../components/Button";
import {loginTpl} from "./LoginTpl";
import {Input} from "../../components/input";

export const Login = () => {
    return Handlebars.compile(loginTpl)({
        btn: Button({buttonTitle: 'Авторизоваться'}),
        loginInput: Input({type: 'text', name: 'login', id: 'login', placeholder: 'Введите логин', label: 'Логин'}),
        passwordInput: Input({type: 'password', name: 'password', id: 'password', placeholder: 'Введите пароль', label: 'Пароль'}),
    })
}