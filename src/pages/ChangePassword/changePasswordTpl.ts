import "../../styles/changePasswordStyles.scss";

export const changePasswordTpl = `
       <div class="changePassword">
       <div class="changePassword__content">
              <div class="changePassword__img" name="avatar"></div>
       <div class="changePassword__name">Иван</div>
              <form class="changePassword__fields">
                    {{{passwordOldInput}}}
                    {{{passwordFirstInput}}}
                    {{{passwordSecondInput}}}
                </form>
            {{{btn}}}
       </div>
       </div>
    `
