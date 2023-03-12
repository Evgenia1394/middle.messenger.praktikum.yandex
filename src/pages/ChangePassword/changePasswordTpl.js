import "../../styles/changePasswordStyles.scss";

export const changePasswordTpl = `
       <div class="changePassword">
       <div class="changePassword__content">
              <div class="changePassword__img"></div>
       <div class="changePassword__name">Иван</div>
              <div class="changePassword__fields">
                    {{{passwordOldInput}}}
                    {{{passwordFirstInput}}}
                    {{{passwordSecondInput}}}
                </div>
            {{{btn}}}
       </div>
       </div>
    `