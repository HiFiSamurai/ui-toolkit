import {View} from '@HiFiSamurai/ui-toolkit';

import './{{camelCase name}}.scss';
import html from './{{camelCase name}}.html';

class {{pascalCase name}} extends View {
    static get tag() { return '{{lowerCase app}}-{{lowerCase name}}'; }
    static get html() { return html; }
}

export default {{pascalCase name}}.wrapped();
