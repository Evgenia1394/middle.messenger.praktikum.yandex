import "../../styles/profileStyles.scss";

export const profileTpl = `
       <div class="profile">
       <div class="profile__content">
       <div class="profile__img"></div>
       <div class="profile__name">Иван</div>
       <div class="profile__fields">
              {{{emailField}}}
       {{{loginField}}}
       {{{firstNameField}}}
       {{{secondNameField}}}
       {{{chatNameField}}}
       {{{phoneNumberField}}}
        </div>
       <div class="profile__buttons">
           {{{btnChangeProfile}}}
           {{{btnChangePassword}}}
           {{{btnExit}}}
       </div>
       </div>
       </div>
    `