import {HTTPTransport} from "../utils/HTTPTransport";
import {BaseAPI} from "./base-api";


const profileAPIInstance = new HTTPTransport();

export class ProfileAPI extends BaseAPI {
    public requestLogout() {
        return profileAPIInstance.post(`/auth/logout`, {
            timeout: 5000,
            headers: {
                'content-type': 'application/json'
            },
        }).then(data => {
            return (data as XMLHttpRequest).responseText === "OK" ? true : false}
        ).catch(error => {
            console.error('Ошибка:', error);
        });
    }

    public requestUser() {
        return profileAPIInstance.get(`/auth/user`, {
            timeout: 5000,
            headers: {
                'content-type': 'application/json'
            },
        })
        .then(data => {
            return JSON.parse((data as XMLHttpRequest).response)
        })
        .catch(error => {console.error('Ошибка:', error);})
    }
}
