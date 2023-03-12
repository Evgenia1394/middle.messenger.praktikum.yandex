import Handlebars from 'handlebars';

import {profileFieldTpl} from "./profileFieldTpl";

export const ProfileField = ({
   name,
   value,
   }) => {
    return Handlebars.compile(profileFieldTpl)({name, value})
}