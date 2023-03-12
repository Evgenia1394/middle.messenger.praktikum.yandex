import Handlebars from 'handlebars';
import {buttonTpl} from "./buttonTpl";

export const Button = ({buttonTitle= 'Go home'}) => {
    return Handlebars.compile(buttonTpl)({buttonTitle})
}