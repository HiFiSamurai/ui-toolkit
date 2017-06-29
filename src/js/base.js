'use strict';

export default class Model {
    constructor(params) {
        Object.assign(this, params);
        Object.freeze(this);
    }

    update(params) {
        return new this.constructor(Object.assign({}, this, params));
    }
}
