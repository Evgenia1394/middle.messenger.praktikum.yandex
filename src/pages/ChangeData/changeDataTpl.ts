import "../../styles/changeDataStyles.scss";

export const changeDataTpl = `
<<<<<<<< HEAD:src/pages/ChangeData/changeDataTpl.ts
       <div class="change-data">
       <div class="change-data__content">
              <div class="change-data__img" name="avatar"></div>
       <div class="change-data__name">Иван</div>
              <form class="change-data__fields">
========
       <div class="changeData">
       <div class="changeData__content">
              <div class="changeData__img"></div>
       <div class="changeData__name">Иван</div>
              <div class="changeData__fields">
>>>>>>>> sprint_2:src/pages/ChangeData/changeDataTpl.js
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