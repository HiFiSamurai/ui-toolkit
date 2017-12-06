'use strict';

export default class Model {
    static get data() {
        return [];
    }

    static findAll() {
        return this.data.map(item => new this(item));
    }

    static get nested() {
        return {};
    }

    constructor(params) {
        for (const [key, Cls] of Object.entries(this.constructor.nested)) {
            const value = params[key];
            if (value) {
                params[key] = value instanceof Array ? value.map(v => new Cls(v)) : new Cls(value);  // jshint ignore:line
            }
        }

        Object.assign(this, params);
        Object.freeze(this);
    }

    update(params) {
        return new this.constructor(Object.assign({}, this, params));
    }
}
