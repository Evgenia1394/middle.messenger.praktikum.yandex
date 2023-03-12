import "../../styles/changeDataStyles.scss";

export const changeDataTpl = `
       <div class="changeData">
       <div class="changeData__content">
              <div class="changeData__img"></div>
       <div class="changeData__name">Иван</div>
              <div class="changeData__fields">
                    {{{emailInput}}}
                    {{{loginInput}}}
                    {{{firstNameInput}}}
                    {{{secondNameInput}}}
                    {{{chatNameInput}}}
                    {{{phoneNumberInput}}}
                </div>
            {{{btn}}}
       </div>
       </div>
    `