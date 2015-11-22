'use strict';

import { isFunction } from 'lodash';

export default function(property, ...args) {
  let prop = this[property];

  if (!!prop && isFunction(prop)) {
    return prop.apply(null, args);
  }

  return !!prop ? prop : {};
};
