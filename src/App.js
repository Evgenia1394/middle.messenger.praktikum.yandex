import {Main} from "./pages/Main";
import {PageError404} from "./pages/PageError404";
import {PageError500} from "./pages/PageError500";
import {Login} from "./pages/Login";
import {Registration} from "./pages/Registration";
import {Profile} from "./pages/Profile";
import {ChangeData} from "./pages/ChangeData";
import {ChangePassword} from "./pages/ChangePassword";
import {Messages} from "./pages/Messages";

export const App = () => {
    switch (window.location.pathname) {
        case '/page-error404':
            return PageError404();
        case '/page-error500':
            return PageError500();
        case '/login':
            return Login();
        case '/registration':
            return Registration();
        case '/profile':
            return Profile();
        case '/change-data':
            return ChangeData();
        case '/change-password':
            return ChangePassword();
        case '/messages':
            return Messages();
        default:
            return Main();
    }
}