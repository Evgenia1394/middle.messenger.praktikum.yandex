import {changeDataTpl} from "./changeDataTpl";
import Block from "../../utils/Block";
import {ButtonBlock} from "../../components/ButtonBlock";
import {InputBlock} from "../../components/InputBlock";
import {isValidForm, validateInput} from "../../utils/Validators";
import {connect} from "../../Store/connect";
import {mapUserToProps} from "../Profile";
import {PageTitle} from "../../components/PageTitle";
import {ProfileController} from "./profile.controller";
import {
    AddChangePhotoListener,
    ConnectedInputAvatarBlock,
} from "../../components/InputAvatar";
import Store from "../../Store/store";

interface ChangeDataProps {
}

export class ChangeData extends Block<ChangeDataProps> {
    constructor(props: ChangeDataProps) {
        super({ type: 'div', ...props });
    }

    init() {
        this.children.btn = new ButtonBlock({
            buttonTitle: 'Сохранить изменения',
            events: {
                click: () => this.ChangeProfileRequest(),
            },
            typeAction: 'submit',
            formName: 'change_data'
        });
        this.children.emailInput = new InputBlock({
            type: 'text',
            name: 'email',
            id: 'email',
            value: this.props.email,
            label: 'Почта',
            placeholder: this.props.email,
            events: {
                focusin: (e) => validateInput(e.target.value, e.target.name, e.target.id),
                focusout: (e) => validateInput(e.target.value, e.target.name, e.target.id),
            }});
        this.children.loginInput = new InputBlock({
            type: 'text',
            name: 'login',
            id: 'login',
            value: this.props.login,
            label: 'Логин',
            placeholder: this.props.login,
            events: {
                focusin: (e) => validateInput(e.target.value, e.target.name, e.target.id),
                focusout: (e) => validateInput(e.target.value, e.target.name, e.target.id),
            }});
        this.children.firstNameInput = new InputBlock({
            type: 'text',
            name: 'first_name',
            id: 'firstName',
            value: this.props.first_name,
            label: 'Имя',
            placeholder: this.props.first_name,
            events: {
                focusin: (e) => validateInput(e.target.value, e.target.name, e.target.id),
                focusout: (e) => validateInput(e.target.value, e.target.name, e.target.id),
            }});
        this.children.secondNameInput = new InputBlock({
            type: 'text',
            name: 'second_name',
            id: 'secondName',
            value: this.props.second_name,
            label: 'Фамилия',
            placeholder: this.props.second_name,
            events: {
                focusin: (e) => validateInput(e.target.value, e.target.name, e.target.id),
                focusout: (e) => validateInput(e.target.value, e.target.name, e.target.id),
            }});
        this.children.chatNameInput = new InputBlock({
            type: 'text',
            name: 'display_name',
            id: 'chatName',
            value: this.props.display_name,
            label: 'Имя в чате',
            placeholder: this.props.display_name,
            events: {
                focusin: (e) => validateInput(e.target.value, e.target.name, e.target.id),
                focusout: (e) => validateInput(e.target.value, e.target.name, e.target.id),
            }});
        this.children.phoneNumberInput = new InputBlock({
            type: 'tel',
            name: 'phone',
            id: 'phoneNumber',
            value: this.props.phone,
            label: 'Телефон',
            placeholder: this.props.phone,
            events: {
                focusin: (e) => validateInput(e.target.value, e.target.name, e.target.id),
                focusout: (e) => validateInput(e.target.value, e.target.name, e.target.id),
            }});
        this.children.titleName = new PageTitle({
            Title: this.props.first_name
        });
        this.children.avatarInput = new ConnectedInputAvatarBlock({url: `https://ya-praktikum.tech/api/v2/resources/${this.props.avatar}`,
            events: {
                change: () => {
                    AddChangePhotoListener();
                }
            }
        })
    }

    componentDidUpdate(oldProps, newProps) {
        if (oldProps !== newProps) {
            console.log('componentDidUpdate')
            this.children.emailInput = new InputBlock({
                type: 'text',
                name: 'email',
                id: 'email',
                value: this.props.email,
                label: 'Почта',
                placeholder: this.props.email,
                events: {
                    focusin: (e) => validateInput(e.target.value, e.target.name, e.target.id),
                    focusout: (e) => validateInput(e.target.value, e.target.name, e.target.id),
                }});
            this.children.loginInput = new InputBlock({
                type: 'text',
                name: 'login',
                id: 'login',
                value: this.props.login,
                label: 'Логин',
                placeholder: this.props.login,
                events: {
                    focusin: (e) => validateInput(e.target.value, e.target.name, e.target.id),
                    focusout: (e) => validateInput(e.target.value, e.target.name, e.target.id),
                }});
            this.children.firstNameInput = new InputBlock({
                type: 'text',
                name: 'first_name',
                id: 'firstName',
                value: this.props.first_name,
                label: 'Имя',
                placeholder: this.props.first_name,
                events: {
                    focusin: (e) => validateInput(e.target.value, e.target.name, e.target.id),
                    focusout: (e) => validateInput(e.target.value, e.target.name, e.target.id),
                }});
            this.children.secondNameInput = new InputBlock({
                type: 'text',
                name: 'second_name',
                id: 'secondName',
                value: this.props.second_name,
                label: 'Фамилия',
                placeholder: this.props.second_name,
                events: {
                    focusin: (e) => validateInput(e.target.value, e.target.name, e.target.id),
                    focusout: (e) => validateInput(e.target.value, e.target.name, e.target.id),
                }});
            this.children.chatNameInput = new InputBlock({
                type: 'text',
                name: 'display_name',
                id: 'chatName',
                value: this.props.display_name,
                label: 'Имя в чате',
                placeholder: this.props.display_name,
                events: {
                    focusin: (e) => validateInput(e.target.value, e.target.name, e.target.id),
                    focusout: (e) => validateInput(e.target.value, e.target.name, e.target.id),
                }});
            this.children.phoneNumberInput = new InputBlock({
                type: 'tel',
                name: 'phone',
                id: 'phoneNumber',
                value: this.props.phone,
                label: 'Телефон',
                placeholder: this.props.phone,
                events: {
                    focusin: (e) => validateInput(e.target.value, e.target.name, e.target.id),
                    focusout: (e) => validateInput(e.target.value, e.target.name, e.target.id),
                }});
            this.children.titleName = new PageTitle({
                Title: this.props.first_name
            });
            this.children.avatarInput = new ConnectedInputAvatarBlock({url: `https://ya-praktikum.tech/api/v2/resources/${this.props.avatar}`,
                events: {
                    change: () => {
                        AddChangePhotoListener();
                    }
                }
            })
            return true;
        }
    }

    public ChangeProfileRequest = async () => {
        event.preventDefault()
        if (!isValidForm()) {
            return;
        }
        const dataChangeProfile = {
            first_name: document.querySelector('input[name="first_name"]').value,
            second_name: document.querySelector('input[name="second_name"]').value,
            display_name: document.querySelector('input[name="display_name"]').value,
            login: document.querySelector('input[name="login"]').value,
            email: document.querySelector('input[name="email"]').value,
            phone: document.querySelector('input[name="phone"]').value,
        }
        const result = await new ProfileController().ChangeProfileRequest(dataChangeProfile)
            .then(res => {
                alert('данные успешно изменены')
                Store.set('user', res)})
            .catch(e => alert('не удалось поменять данные'));
    }

    render() {
        return this.compile(changeDataTpl, { ...this.props });
    }
}

export const ConnectedChangeData = connect(ChangeData, mapUserToProps);
