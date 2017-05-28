# node-pogo-protos
Uses [protobuf.js](https://github.com/dcodeIO/protobuf.js) to compile the Protobuf files from
[POGOProtos](https://github.com/AeonLucid/POGOProtos) into an easy to use Node module.

Contains a [workaround](https://github.com/cyraxx/node-pogo-protos/blob/master/pogo-protos.js#L7) that
fixes the proto3 packed fields bug in protobuf.js for you.

[![npm version](https://badge.fury.io/js/node-pogo-protos.svg)](https://badge.fury.io/js/node-pogo-protos)
![npm downloads](https://img.shields.io/npm/dt/node-pogo-protos.svg)
![dependencies](https://david-dm.org/cyraxx/node-pogo-protos.svg)
![license](https://img.shields.io/npm/l/node-pogo-protos.svg)

For more details see the [protobuf.js documentation](https://github.com/dcodeIO/protobuf.js/wiki).

## Usage with TypeScript
TypeScript definitions are included. To use them, make sure that:
* Typings is installed: `npm install -g typings` (create an alias for `typings` if installed locally)
* External type declarations have been added: `typings install dt~long dt~bytebuffer env~node --global --save`

Add declarations to `.tsconfig.json`:
```javascript
{
  /* ... */
  "files": [
    "typings/index.d.ts",
    /* ... */
  ],
  /* ... */
}
```

And use `import` instead of `require`:
```javascript
import * as POGOProtos from 'node-pogo-protos';
```

TypeScript 2.0 module resolution via `@types` is not currently supported, however the above will work for both TypeScript ^1.8 and ^2.0.
