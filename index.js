'use strict';

require('babel-register');

import nodeTry from './lib/node-try';

let opts = {
  value: nodeTry,
  writable: true
};

Object.defineProperty(Object.prototype, 'nodeTry', opts);
