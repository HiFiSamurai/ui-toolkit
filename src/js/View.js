'use strict';

import 'webcomponents.js/webcomponents-lite';

class View extends HTMLElement {
    static wrapped() {
        const cls = document.registerElement(this.name, this);
        return (params) => Object.assign(new cls(), params);
    }

    createdCallback() {
        if (!!this.constructor.html) {
            const template = new DOMParser().parseFromString(this.constructor.html, 'text/html');
            const content = document.importNode(template.head.firstChild.content, true);
            this.appendChild(content);
        }
    }
}

export default View;
