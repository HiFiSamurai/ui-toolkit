import View from '../../js/View';

import './dropdown.scss';
import html from './dropdown.html';

class DropDown extends View {
    static get tag() { return 'ui-dropdown'; }
    static get html() { return html; }

    connectedCallback() {
        const frag = document.createDocumentFragment();
        this.options.map((el) => { frag.appendChild(el); });
        this.querySelector('select').appendChild(frag);
    }

    get options() {
        const options = (this.data || []).map((item) => {
            const option = document.createElement('option');
            return {
                ...option,
                textContent: item.label || item.value,
                value: item.value,
            };
        });
        return Array.from(this.querySelectorAll('option')).concat(options);
    }
};

export default DropDown.wrapped();
