import "../../styles/loginStyles.scss";

export const loginTpl = `
        <div class="login">
            <div class="login__content">
            <div>
                <div class="login__title">Вход</div>
                <div class="login__fields">
                    {{{loginInput}}}
                    {{{passwordInput}}}
                </div>
            </div>
            <div class="login__buttons">
                {{{btn}}}
                <div class="login__not">
                 Нет аккаунта?
                </div>
            </div>
            </div>
        </div>
    `