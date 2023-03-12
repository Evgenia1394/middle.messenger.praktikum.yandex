import Handlebars from 'handlebars';
import {pageErrorTpl500} from './PageErrorTpl500';
import {Button} from "../../components/Button";
export const PageError500 = () => {
    return Handlebars.compile(pageErrorTpl500)({btn: Button({buttonTitle: 'Назад к чатам'})})
}