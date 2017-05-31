const protobufjs = require('protobufjs');
const path = require('path');

module.exports.load = function() {
    return protobufjs.load(path.join(__dirname, 'proto', 'POGOProtos.proto'))
                     .then(proto => proto.POGOProtos);
}