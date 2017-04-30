'use strict';

import 'webcomponents.js/webcomponents-lite';

export function createView(name, Class) {
    const View = document.registerElement(name, Class);
    return (params) => Object.assign(new View(), params);
}

export function createTemplate(html) {
    const t = new DOMParser().parseFromString(html, 'text/html');
    const template = t.head.firstChild.content;
    return document.importNode(template, true);
}
