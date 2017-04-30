'use strict';

const memoized = new WeakMap();

function memoizationFor(obj) {
  let table = memoized.get(obj);
  if (!table) { table = Object.create(null); memoized.set(obj, table); }
  return table;
}

export function memoize(target, name, descriptor) {
  const getter = descriptor.get, setter = descriptor.set;

    descriptor.get = function() {
        const table = memoizationFor(this);
        if (name in table) { return table[name]; }
        return table[name] = getter.call(this);
    };

    descriptor.set = function(val) {
        const table = memoizationFor(this);
        setter.call(this, val);
        table[name] = val;
    };
}

export function debounce(target, name, descriptor, time=0) {
    const value = descriptor.value;

    descriptor.value = function() {
        setTimeout(() => {
            value.apply(this, arguments);
        }, time);
    };
}
