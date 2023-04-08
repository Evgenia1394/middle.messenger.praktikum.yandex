import {RegExpExpressions} from "./regExp";

export function submitForm (validateWithType = false) {
    const allInputs = Array.from(document.querySelectorAll('input'));
    let notValidInputs;
    if (validateWithType) {
        notValidInputs = allInputs
            .filter(input => (!new RegExp(RegExpExpressions[input.type]).test(input.value)) || (!input.value));
    } else {
        notValidInputs = allInputs
            .filter(input => (!new RegExp(RegExpExpressions[input.name]).test(input.value)) || (!input.value));
    }
    const allValues = allInputs.map((control) => {
        return `Input ${(control as HTMLInputElement).name} со значением ${(control as HTMLInputElement).value}`}
    )
    if (!!notValidInputs.length) {
        console.log('Форма невалидна', allValues)
    } else {
        console.log('Форма валидна', allValues)
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
        inputError.textContent = ``
    } else {
        inputError.textContent = `Сообщение не введено!`
    }
}
