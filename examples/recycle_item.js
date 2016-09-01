const POGOProtos = require('node-pogo-protos');

var myMessage = new POGOProtos.Networking.Requests.Messages.RecycleInventoryItemMessage({
  item_id: POGOProtos.Inventory.Item.ItemId.ITEM_POTION,
  count: 50
});

var encoded = myMessage.encode();

var decodedAgain = POGOProtos.Networking.Requests.Messages.RecycleInventoryItemMessage.decode(encoded);
console.log(decodedAgain.count); // will print 50