import Handlebars from 'handlebars';
import {pageErrorTpl404} from './PageErrorTpl404';
import {Button} from "../../components/Button";
export const PageError404 = () => {
    return Handlebars.compile(pageErrorTpl404)({btn: Button({buttonTitle: 'Назад к чатам'})})
}