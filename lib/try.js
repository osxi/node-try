'use strict';

var nodeTry = function(property) {
  return !!this[property] ? this[property] : {};
};

Object.defineProperty(Object.prototype, 'nodeTry', {
  value: nodeTry,
  writable: true
});
