import '@webcomponents/custom-elements';

class View extends HTMLElement {
    static wrapped() {
        customElements.define(this.tag, this);
        return (params) => Object.assign(new this(), params);
    }

    constructor() {
        super();

        if (!this.constructor.html) { return; }
        const frag = document.createRange().createContextualFragment(this.constructor.html);
        this.appendChild(frag);
    }
}

export default View;
