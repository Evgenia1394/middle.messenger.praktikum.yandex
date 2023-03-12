import Handlebars from 'handlebars';

import {inputTpl} from "./inputTpl";

export const Input = ({
   placeholder= 'Go home',
   type='text',
   id,
   name,
   value,
   label
   }) => {
    return Handlebars.compile(inputTpl)({placeholder, type, id, name, value, label})
}