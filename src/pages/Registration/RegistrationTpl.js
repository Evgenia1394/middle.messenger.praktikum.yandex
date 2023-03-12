import "../../styles/registrationStyles.scss";

export const registrationTpl = `
        <div class="registration">
            <div class="registration__content">
            <div>
                <div class="registration__title">Регистрация</div>
                <div class="registration__fields">
                    {{{emailInput}}}
                    {{{loginInput}}}
                    {{{firstNameInput}}}
                    {{{secondNameInput}}}
                    {{{phoneNumberInput}}}
                    {{{passwordFirstInput}}}
                    {{{passwordSecondInput}}}
                </div>
            </div>
            <div class="registration__buttons">
                {{{btn}}}
                <div class="registration__enter">
                 Войти
                </div>
            </div>
            </div>
        </div>
    `