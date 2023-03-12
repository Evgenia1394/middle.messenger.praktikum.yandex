import Handlebars from "handlebars";
import {changeDataTpl, messagesTpl} from "./messagesDataTpl";
import {Button} from "../../components/Button";
import {Input} from "../../components/input";

export const Messages = () => {
    return Handlebars.compile(messagesTpl)({})
}