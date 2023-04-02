import "../../styles/dialogPreviewStyles.scss";

export const DialogPreviewTpl = `
        <div class="dialog-preview">
        <div class="dialog-preview__icon">
        
        </div>
        <div class="dialog-preview__description">
            <div class="dialog-preview__name">
            {{{name}}}
            </div>
            <div class="dialog-preview__message">
            {{{text}}}
            </div>
        </div>
        <div class="dialog-preview__details">
             <div class="dialog-preview__time">
            {{{time}}}
            </div>
            <div class="dialog-preview__circle">
                <div class="dialog-preview__count">
                {{{count}}}
                </div>
            </div>
        </div>
        </div>
    `
