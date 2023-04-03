import "../../styles/pageErrorStyles.scss";

export const pageErrorTpl404 = `
        <div class="pageError">
            <div class="pageError__content">
                <div class="pageError__number">404</div>
                <div class="pageError__description">Такой страницы не существует</div>
               {{{backButton}}}
            </div>
        </div>
    `
