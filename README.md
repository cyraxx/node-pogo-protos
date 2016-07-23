# node-pogo-protos
Uses [protobuf.js](https://github.com/dcodeIO/protobuf.js) to compile the Protobuf files from
[POGOProtos](https://github.com/AeonLucid/POGOProtos) into an easy to use Node module.

[![npm version](https://badge.fury.io/js/node-pogo-protos.svg)](https://badge.fury.io/js/node-pogo-protos)
![dependencies](https://david-dm.org/cyraxx/node-pogo-protos.svg)

## How to use
```
const POGOProtos = require('node-pogo-protos');

var myMessage = new POGOProtos.Networking.Requests.Messages.RecycleInventoryItemMessage({
  item_id: POGOProtos.Inventory.Item.ItemId.ITEM_POTION,
  count: 50
});

var encoded = myMessage.encode();

var decodedAgain = POGOProtos.Networking.Requests.Messages.RecycleInventoryItemMessage.decode(myMessage);
consoe.log decodedAgain.count); // will print 50
```

For more details see the [protobuf.js documentation](https://github.com/dcodeIO/protobuf.js/wiki).
