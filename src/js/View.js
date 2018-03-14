import '@webcomponents/webcomponentsjs';

class View extends HTMLElement {
    static wrapped() {
        customElements.define(this.name, this);
        return (params) => Object.assign(new this(), params);
    }

    constructor() {
        super();

        if (!this.constructor.html) {
            return;
        }

        const template = new DOMParser().parseFromString(this.constructor.html, 'text/html');
        const content = document.importNode(template.head.firstChild.content, true);
        this.appendChild(content);
    }
}

export default View;
