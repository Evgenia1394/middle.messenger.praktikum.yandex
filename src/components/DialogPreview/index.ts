import {DialogPreviewTpl} from "./DialogPreview";
import Block from "../../utils/Block";

export interface DialogPreviewProps {
    type?: string,
    text?: string,
    name?: string,
    count?: string,
    time?: string,
    events?: {
        click?: () => void;
        focusin?: (value, name) => void;
        focusout?: (value, name) => void;
    };
}

export class DialogPreview extends Block<DialogPreviewProps> {
    constructor(props: DialogPreviewProps) {
        super({type: 'div', ...props});
    }

    public get value() {
        return (this.element as HTMLInputElement).value;
    }
    init() {}

    render() {
        return this.compile(DialogPreviewTpl, { ...this.props });
    }
}
