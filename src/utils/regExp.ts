export const RegExpExpressions = {
    login: '^[a-zA-Z0-9-_]{3,20}$',
    password: '(?=.*[0-9])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,40}',
    first_name: '^[А-ЯA-Z][а-яА-Яa-zA-Z-]{1,}$',
    second_name: '^[А-ЯA-Z][а-яА-Яa-zA-Z-]{1,}$',
    phone: '^[1-9+][1-9]{9,14}$',
    email: '([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)',
}

