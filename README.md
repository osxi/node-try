# node-try [![Build Status](https://travis-ci.org/osxi/node-try.svg?branch=master)](https://travis-ci.org/osxi/node-try) [![devDependency Status](https://david-dm.org/osxi/node-try/dev-status.svg)](https://david-dm.org/osxi/node-try#info=devDependencies)

`npm install node-try`

Try for Node, based on Ruby's try.

## Usage

Import the nodeTry method:

```
import nodeTry from 'node-try';
```

Then you can access object properties via dot notation without throwing an exception by using `#nodeTry` as the getter. 

For example, given the following object of:

```
var stuff = {
  foo: 'bar'
};
```

You then have access to `foo` via `stuff.nodeTry('foo')`. 

If you were to write `stuff.nodeTry('notFoo')`, an empty object would be returned.

## Further Reading
  - See the [tests](https://github.com/osxi/node-try/blob/master/test/node-try-test.js).
