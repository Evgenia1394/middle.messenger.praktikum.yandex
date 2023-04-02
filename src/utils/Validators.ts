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

export function validateInput (value, name) {
    if (new RegExp(RegExpExpressions[name]).test(value)) {
        console.log(`Инпут ${name} валидный`);
    } else {
        console.log(`Инпут ${name} невалидный`);
    }
}

export function requiredValidation(tag: string) {
    const Input = document.getElementById(tag);
    if ((Input as HTMLInputElement).value) {
        console.log('Сообщение введено');
    } else {
        console.log('Сообщение не введено');
    }
}
