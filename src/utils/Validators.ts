import {RegExpExpressions} from "./regExp";

export function isValidForm (validateWithType = false): boolean {
    const allInputs = Array.from(document.querySelectorAll('input')).filter(item => item.type !== 'file');
    let notValidInputs;
    if (validateWithType) {
        notValidInputs = allInputs
            .filter(input => (!new RegExp(RegExpExpressions[input.type]).test(input.value)) || (!input.value));
    } else {
        /** Когда есть инпуты с одинаковым типом в форме - вытаскиваем и валидируем в зав-ти от имени */
        notValidInputs = allInputs
            .filter(input => (!new RegExp(RegExpExpressions[input.name]).test(input.value)) || (!input.value));
    }
    if (!!notValidInputs.length) {
        return false;
    } else {
        return true;
    }
}

export function validateInput(value, name, id) {
    const inputError = document.querySelector(`span.${id}`);
    if (new RegExp(RegExpExpressions[name]).test(value)) {
        inputError.textContent = ``
    } else {
        inputError.textContent = `Неверный формат поля ${name}`
    }
}

export function requiredValidation(tag: string) {
    const Input = document.getElementById(tag);
    const inputError = document.querySelector(`span.${tag}`);
    if ((Input as HTMLInputElement).value) {
        inputError.textContent = ``;
        return true;
    } else {
        inputError.textContent = `Сообщение не введено!`;
        return false;
    }
}
