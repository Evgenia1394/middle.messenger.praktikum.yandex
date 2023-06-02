import Block from "../../utils/Block";
import {inputAvatarTpl} from "./InputAvatarTpl";
import {ProfileController} from "../../pages/ChangeData/profile.controller";
import Store from "../../Store/store";
import {connect} from "../../Store/connect";
import {mapUserToProps} from "../../pages/Profile";

export interface InputAvatarBlockProps {
    placeholder?: string,
    type?: string,
    id?: string,
    name?: string,
    value?: string | null,
    label?: string,
    events?: {
        click?: () => void;
        focusin?: (value, name) => void;
        focusout?: (value, name) => void;
        change?: (e: InputEvent) => void;
    };
    url?: string;
}

export class InputAvatarBlock extends Block<InputAvatarBlockProps> {
    constructor(props: InputAvatarBlockProps) {
        super({type: 'input', ...props});

    }

    public get value() {
        return (this.element as HTMLInputElement).value;
    }
    init() {
    }

    render() {
        return this.compile(inputAvatarTpl, { ...this.props });
    }
}

export function AddChangePhotoListener() {
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) {
            const formData = new FormData();
            formData.append('avatar', document.getElementById("file-input").files[0])
            const result = new ProfileController().changeAvatarRequest(formData)
                .then(result => {
                    if (result?.reason) {
                        return;
                    } else {
                        Store.set('user', {...Store.getState().user, avatar: result.avatar})
                    }
                });
    }

}

export const ConnectedInputAvatarBlock = connect(InputAvatarBlock, mapUserToProps);
