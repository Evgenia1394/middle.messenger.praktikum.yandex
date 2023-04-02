import "../../styles/changePasswordStyles.scss";

export const changePasswordTpl = `
       <div class="change-password">
       <div class="change-password__content">
              <div class="change-password__img" name="avatar"></div>
       <div class="change-password__name">Иван</div>
              <form class="change-password__fields">
                    {{{passwordOldInput}}}
                    {{{passwordFirstInput}}}
                    {{{passwordSecondInput}}}
                </form>
            {{{btn}}}
       </div>
       </div>
    `
