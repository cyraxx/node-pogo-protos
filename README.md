# node-pogo-protos
Uses [protobuf.js](https://github.com/dcodeIO/protobuf.js) to compile the Protobuf files from
[POGOProtos](https://github.com/AeonLucid/POGOProtos) into an easy to use Node module.

Contains a [workaround](https://github.com/cyraxx/node-pogo-protos/blob/master/pogo-protos.js#L7) that
fixes the proto3 packed fields bug in protobuf.js for you.

[![npm version](https://badge.fury.io/js/node-pogo-protos.svg)](https://badge.fury.io/js/node-pogo-protos)
![npm downloads](https://img.shields.io/npm/dt/node-pogo-protos.svg)
![dependencies](https://david-dm.org/cyraxx/node-pogo-protos.svg)
![license](https://img.shields.io/npm/l/node-pogo-protos.svg)

## How to use
```javascript
const POGOProtos = require('node-pogo-protos');

var myMessage = POGOProtos.Networking.Requests.Messages.RecycleInventoryItemMessage.fromObject({
  item_id: POGOProtos.Inventory.Item.ItemId.ITEM_POTION,
  count: 50
});

var encoded = POGOProtos.Networking.Requests.Messages.RecycleInventoryItemMessage.encode(myMessage).finish();

var decodedAgain = POGOProtos.Networking.Requests.Messages.RecycleInventoryItemMessage.decode(encoded);
console.log(decodedAgain.count); // will print 50
```

For more details see the [protobuf.js documentation](https://github.com/dcodeIO/protobuf.js/wiki).

## Usage with TypeScript
TypeScript definitions are included. Modern IDE should use them automatically.
