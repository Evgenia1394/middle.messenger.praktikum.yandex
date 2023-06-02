import {changePasswordTpl} from "./changePasswordTpl";
import Block from "../../utils/Block";
import {ButtonBlock} from "../../components/ButtonBlock";
import {isValidForm, validateInput} from "../../utils/Validators";
import {InputBlock} from "../../components/InputBlock";
import {ProfileController} from "../ChangeData/profile.controller";
import {connect} from "../../Store/connect";
import {PageTitle} from "../../components/PageTitle";
import {AddChangePhotoListener, ConnectedInputAvatarBlock, InputAvatarBlock} from "../../components/InputAvatar";
import {BASE_URL} from "../../api/base-api";
import Store, {initialUser} from "../../Store/store";

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
                click: () => this.ChangePasswordRequest()
            }
        });
        this.children.passwordOldInput = new InputBlock({
            type: 'password',
            name: 'oldPassword',
            id: 'passwordOld',
            label: 'Старый пароль',
            placeholder: 'Введите старый пароль',
            events: {
                focusin: (e) => validateInput(e.target.value, e.target.type, e.target.id),
                focusout: (e) => validateInput(e.target.value, e.target.type, e.target.id),
            }});
        this.children.passwordFirstInput = new InputBlock({
            type: 'password',
            name: 'newPassword',
            id: 'passwordFirst',
            label: 'Новый пароль',
            placeholder: 'Введите новый пароль',
            events: {
                focusin: (e) => validateInput(e.target.value, e.target.type, e.target.id),
                focusout: (e) => validateInput(e.target.value, e.target.type, e.target.id),
            }});
        this.children.passwordSecondInput = new InputBlock({
            type: 'password',
            name: 'newPassword',
            id: 'passwordSecond',
            label: 'Повторите пароль',
            placeholder: 'Введите новый пароль еще раз',
            events: {
                focusin: (e) => validateInput(e.target.value, e.target.type, e.target.id),
                focusout: (e) => validateInput(e.target.value, e.target.type, e.target.id),
            }});
        this.children.titleName = new PageTitle({
            Title: this.props.first_name
        });

        this.children.avatarInput = new InputAvatarBlock({url: `${BASE_URL}/resources/${this.props.avatar}`,
            events: {
                change: () => {
                    AddChangePhotoListener();
                }
            }});

    }

    componentDidUpdate(oldProps, newProps) {
        if (oldProps !== newProps) {
            this.children.titleName = new PageTitle({
                Title: this.props.first_name
            });

            this.children.avatarInput = new InputAvatarBlock({url: `${BASE_URL}/resources/${this.props.avatar}`,
                events: {
                    change: () => {
                        AddChangePhotoListener();
                    }
                }});
            return true;
        }
    }

    public ChangePasswordRequest = async () => {
        event.preventDefault()
        if (!isValidForm()) {
            return;
        }
        const dataChangePassword = {
            oldPassword: document.querySelector('input[name="oldPassword"]').value,
            newPassword: document.querySelector('input[name="newPassword"]').value,
        }
        const result = await new ProfileController().ChangePasswordRequest(dataChangePassword)
        .then(res => {
            alert('пароль успешно изменен')
            Store.set('user', res)})
            .catch(e => alert('не удалось поменять пароль'));
    }

    render() {
        return this.compile(changePasswordTpl, { ...this.props });
    }
}

export function mapUserToPasswordProps(state) {
    if (!Object.keys(state).length) {
        return initialUser;
    }
    return {
        avatar: state.user.avatar,
        first_name: state.user.first_name,
    };
}

export const ConnectedChangePassword = connect(ChangePassword, mapUserToPasswordProps);
