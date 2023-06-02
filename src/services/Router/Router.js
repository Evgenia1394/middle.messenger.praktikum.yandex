//Router отвечает только за изменение URL и вызывает Route
import Route from "./Route";
import {Main} from "../../pages/Main";
import {PageError404} from "../../pages/PageError404";
import {PageError500} from "../../pages/PageError500";
import {Login} from "../../pages/Login";
import {Registration} from "../../pages/Registration";
import {ConnectedProfile} from "../../pages/Profile";
import {ConnectedChangeData} from "../../pages/ChangeData";
import {ConnectedChangePassword} from "../../pages/ChangePassword";
import {ConnectedChatPage} from "../../pages/ChatPage";
import {ConnectedCurrentChat} from "../../pages/CurrentChat";

/**
 go — переходит на нужный роут и отображает нужный блок;
 back — возвращает в прошлое состояние и показывает блок, соответствующий тому состоянию;
 forward — переходит в следующие состояние и показывает соответствующий блок;
 use — регистрирует блок по пути в роут и возвращает себя — чтобы можно было выстроить в цепочку;
 start — по событию onpopstate запускает приложение.
*/
export class Router {
    constructor(rootQuery) {
        //проверка на синглтон
        this.routes = [];
        if (Router.__instance) {
            return Router.__instance;
        }

        this.routes = [];

        if (!Router.__instance) {
            this.registerRoutes()
        }

        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;

        Router.__instance = this;
    }

    use(pathname, block) {
        // Чтобы избавить роутер от прямого взаимодействия с блоком, можно ввести ещё один слой абстракции
        const route = new Route(pathname, block, {rootQuery: this._rootQuery});
        this.routes.push(route);
        // Возврат this — основа паттерна "Builder" («Строитель»)
        return this;
    }


    start() {
        window.onpopstate = event => {
            event.preventDefault()
            this._onRoute(event.currentTarget.location.pathname);
        };
        this._onRoute(window.location.pathname);
    }

    registerRoutes() {
        this.use('/', Main)
        this.use('/page-error404', PageError404)
        this.use('/page-error500', PageError500)
        this.use('/login', Login)
        this.use('/registration', Registration)
        this.use('/profile', ConnectedProfile)
        this.use('/change-data', ConnectedChangeData)
        this.use('/change-password', ConnectedChangePassword)
        this.use('/messages', ConnectedChatPage)
        this.use('/messages/:id', ConnectedCurrentChat)
    }

    _onRoute(pathname) {
        const route = this.getRoute(pathname);
        if (!route) {
            return;
        }
        if (this._currentRoute && this._currentRoute !== route) {
            this._currentRoute.leave();
        }
        this._currentRoute = route;
        route.render(route, pathname);
    }

    go(pathname) {
        this.history.pushState({}, "", pathname);
        this._onRoute(pathname);
    }

    back() {
       this.history.back();
       return window.location.replace(document.referrer)
    }

    forward() {
        this.history.forward();
    }

    getRoute(pathname) {
        //заменила match
        return this.routes.find(route => route._pathname === pathname);
    }


}

export default Router;
