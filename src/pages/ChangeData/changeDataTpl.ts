import "../../styles/changeDataStyles.scss";

export const changeDataTpl = `
       <div class="change-data">
       <div class="change-data__content">
              <div class="change-data__img" name="avatar"></div>
       <div class="change-data__name">Иван</div>
              <form class="change-data__fields">
                    {{{emailInput}}}
                    {{{loginInput}}}
                    {{{firstNameInput}}}
                    {{{secondNameInput}}}
                    {{{chatNameInput}}}
                    {{{phoneNumberInput}}}
                </form>
            {{{btn}}}
       </div>
       </div>
    `
