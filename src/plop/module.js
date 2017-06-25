'use strict';

import { createTemplate } from 'ui-toolkit/dist/js/views';

import './{{camelCase name}}.scss';
import html from './{{camelCase name}}.html';

class {{pascalCase name}} extends HTMLElement {
    attachedCallback() {
        const content = createTemplate(html);
        this.appendChild(content);
    }
}

export default document.registerElement('{{lowerCase app}}-{{lowerCase name}}', {{pascalCase name}});
