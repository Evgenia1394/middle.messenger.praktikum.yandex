import Router from './services/Router/Router.js';
import Store from "./Store/store";
import {UserController} from "./user.controller";

const root = document.querySelector('#root');
let isLogged;
new UserController().getUser()
    .then(data => {
        return data
    }).then((user) => {
        if (user?.reason) {
            isLogged = false;
        } else {
            Store.set('user', user)
            isLogged = true;
        }
    }).catch((error => isLogged = false))
    .then(() => {getComponent(window.location.pathname, isLogged)})

let router = new Router('.app');
router.start();


const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://fonts.googleapis.com/css?family=Open+Sans';
link.type = 'text/css';
document.head.appendChild(link);

function getComponent(pathname, isLogged) {
        switch (pathname) {
                case '/page-error404':
                    return router.go('/page-error404');
                case '/page-error500':
                    return router.go('/page-error500');
                case '/login':
                    return router.go('/login');
                case '/registration':
                    return router.go('/registration');
                case '/profile':
                    return router.go('/profile');
                case '/change-data':
                    return router.go('/change-data');
                case '/change-password':
                    return router.go('/change-password');
                case '/messages':
                    return router.go('/messages');
                case '/messages/:id':
                    return router.go('/messages/:id');
                default:
                    if (!isLogged) {
                        return router.go('/login');
                    } else {
                        return router.go('/messages');
                    };
            }
}







