export function setCookie(name, value, days?) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

export function getCookie(name) {
    const cookies = document.cookie.split(';');
// Создаем объект для хранения cookie
    const cookieObj = {};
// Проходим по всем cookie и записываем их в объект
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim().split('=');
        cookieObj[cookie[0]] = cookie[1];
    }
// Получаем значение cookie по ключу
    if (cookieObj[name]) {
        return cookieObj[name];
    } else {
        return null;
    }
}

