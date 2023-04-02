import "../../styles/pageErrorStyles.scss";

export const pageErrorTpl500 = `
        <div class="pageError">
            <div class="pageError__content">
                <div class="pageError__number">500</div>
                <div class="pageError__description">Что-то пошло не так ...</div>
               {{{backButton}}}
            </div>
        </div>
    `
