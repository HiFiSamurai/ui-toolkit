import View from '../../js/View';

import './toggle.scss';
import html from './toggle.html';

class Toggle extends View {
    static get tag() { return 'ui-toggle'; }
    static get html() { return html; }
};

export default Toggle.wrapped();
