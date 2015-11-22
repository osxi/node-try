'use strict';

var nodeTry = function(property) {
  if (!!this[property] && this[property].constructor.name === 'Function') {
    return this[property]();
  }

  return !!this[property] ? this[property] : {};
};

Object.defineProperty(Object.prototype, 'nodeTry', {
  value: nodeTry,
  writable: true
});
