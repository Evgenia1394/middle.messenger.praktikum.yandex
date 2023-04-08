import "../../styles/changeDataStyles.scss";

export const changeDataTpl = `
       <div class="change-data">
       <div class="change-data__content">
              <div class="change-data__img"></div>
       <div class="change-data__name">Иван</div>
            <form class="change-data__form" id="change_data">
                  <div class="change-data__fields">
                        {{{emailInput}}}
                        {{{loginInput}}}
                        {{{firstNameInput}}}
                        {{{secondNameInput}}}
                        {{{chatNameInput}}}
                        {{{phoneNumberInput}}}
                    </div>
                    {{{btn}}}
                </form>
       </div>
       </div>
    `
