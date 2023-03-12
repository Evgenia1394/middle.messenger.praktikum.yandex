import Handlebars from 'handlebars'
export const Main = () => {
    return Handlebars.compile(`
    <main>
        <nav>
            <ul>
                <li>
                    <a href="/page-error404">PageError404</a>
                </li>
                <li>
                    <a href="/page-error500">PageError500</a>
                </li>
                <li>
                    <a href="/login">Login</a>
                </li>
                <li>
                    <a href="/registration">Registration</a>
                </li>
                <li>
                    <a href="/profile">Profile</a>
                </li>
                <li>
                    <a href="/change-data">Change Data</a>
                </li>
                <li>
                    <a href="/change-password">Change Password</a>
                </li>
                <li>
                    <a href="/messages">Messages</a>
                </li>
            </ul>
        </nav>
    </main>
    `)()
}
