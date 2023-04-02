import {changePasswordTpl} from "./changePasswordTpl";
import Block from "../../utils/Block";
import {ButtonBlock} from "../../components/ButtonBlock";
import {submitForm, validateInput} from "../../utils/Validators";
import {InputBlock} from "../../components/InputBlock";

interface ChangePasswordProps {
}

export class ChangePassword extends Block<ChangePasswordProps> {
    constructor(props: ChangePasswordProps) {
        super({ type: 'div', ...props });
    }

    init() {
        this.children.btn = new ButtonBlock({
            buttonTitle: 'Сохранить изменения',
            events: {
                click: () => submitForm(true)
            }
        });
        this.children.passwordOldInput = new InputBlock({type: 'password', name: 'oldPassword', id: 'passwordOld', value: 'ivanov',label: 'Старый пароль',
            events: {
                focusin: (e) => validateInput(e.target.value, e.target.type),
                focusout: (e) => validateInput(e.target.value, e.target.type),
            }});
        this.children.passwordFirstInput = new InputBlock({type: 'password', name: 'newPassword', id: 'passwordFirst', value: 'ivanov',label: 'Новый пароль',
            events: {
                focusin: (e) => validateInput(e.target.value, e.target.type),
                focusout: (e) => validateInput(e.target.value, e.target.type),
            }});
        this.children.passwordSecondInput = new InputBlock({type: 'password', name: 'newPassword', id: 'passwordSecond', value: 'ivanov', label: 'Повторите пароль',
            events: {
                focusin: (e) => validateInput(e.target.value, e.target.type),
                focusout: (e) => validateInput(e.target.value, e.target.type),
            }});
    }


    render() {
        return this.compile(changePasswordTpl, { ...this.props });
    }
}
