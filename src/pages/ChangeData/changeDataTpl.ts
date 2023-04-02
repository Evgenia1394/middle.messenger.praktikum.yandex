import "../../styles/changeDataStyles.scss";

export const changeDataTpl = `
       <div class="changeData">
       <div class="changeData__content">
              <div class="changeData__img" name="avatar"></div>
       <div class="changeData__name">Иван</div>
              <form class="changeData__fields">
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
