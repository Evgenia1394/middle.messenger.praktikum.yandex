import {messagesDataTpl} from "./messagesDataTpl";
import Block from "../../utils/Block";
import {DialogPreview} from "../../components/DialogPreview";

interface MessagesDataProps {
}

export class MessagesData extends Block<MessagesDataProps> {
    constructor(props: MessagesDataProps) {
        super({type: 'div', ...props});
    }

    init() {
    const mockData = [{text: 'Привет, как дела?', name: 'Иван', count: '2', time: '15:45'},{text: 'Получилось?', name: 'Петр', count: '1', time: '12:48'},
            {text: 'Да', name: 'Лаврентий', count: '3', time: '10:59'}]

        //не понимаю почему рендерятся запятые у DialogPreview
        this.children.dialogPreview = mockData.map(chat => {
            return new DialogPreview({...chat})
        });
    }

    render() {
        return this.compile(messagesDataTpl, { ...this.props });
    }


}
