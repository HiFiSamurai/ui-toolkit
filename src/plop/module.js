import View from 'ui-toolkit/dist/js/View';

import './{{camelCase name}}.scss';
import html from './{{camelCase name}}.html';

class {{pascalCase name}} extends View {
    static get name() { return '{{lowerCase app}}-{{lowerCase name}}'; }
    static get html() { return html; }
}

export default {{pascalCase name}}.wrapped();
