import Handlebars from 'handlebars'
export const Main = () => {
    return Handlebars.compile(`
    <div>
        <a href="/page-error404">PageError404</a>
    </div>
    <div>
        <a href="/page-error500">PageError500</a>
    </div>
    <div>
        <a href="/login">Login</a>
    </div>
    <div>
        <a href="/registration">Registration</a>
    </div>
    <div>
        <a href="/profile">Profile</a>
    </div>
    <div>
        <a href="/change-data">Change Data</a>
    </div>
    <div>
        <a href="/change-password">Change Password</a>
    </div>
    <div>
        <a href="/messages">Messages</a>
    </div>
    `)()
}