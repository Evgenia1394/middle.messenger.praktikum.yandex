import {Main} from "./pages/Main";
import {PageError404} from "./pages/PageError404";
import {PageError500} from "./pages/PageError500";
import {Login} from "./pages/Login";
import {Registration} from "./pages/Registration";
import {Profile} from "./pages/Profile";
import {ChangeData} from "./pages/ChangeData";
import {ChangePassword} from "./pages/ChangePassword";
import {ChatPage} from "./pages/ChatPage";

//как сделать переходы по ссылке снова доступными, через тоже не получается appendChild
export const App = () => {
    const root = document.querySelector('#root');
    switch (window.location.pathname) {
        case '/page-error404':
            return root.appendChild(new PageError404({}).element)
        case '/page-error500':
            return new PageError500({});
        case '/login':
            return new Login({});
        case '/registration':
            return new Registration({});
        case '/profile':
            return new Profile({});
        case '/change-data':
            return new ChangeData({});
        case '/change-password':
            return new ChangePassword({});
        case '/messages':
            return new ChatPage({});
        default:
            return new Main({});
    }
}