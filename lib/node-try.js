'use strict';

export default function(property, ...args) {
  let prop = this[property];

  if (!!prop && isFunction(prop)) {
    return prop.apply(null, args);
  }

  return !!prop ? prop : {};
};

function isFunction(key) {
  return key.constructor.name === 'Function';
}
