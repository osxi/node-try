'use strict';

var nodeTry = function(property, args) {
  if (!!this[property] && this[property].constructor.name === 'Function') {
    return this[property].apply(null, args);
  }

  return !!this[property] ? this[property] : {};
};

Object.defineProperty(Object.prototype, 'nodeTry', {
  value: nodeTry,
  writable: true
});
