const fs = require('fs'),
    protobuf = require('protobufjs');

const builder = protobuf.newBuilder(),
    protoDir = __dirname + '/proto';

fs.readdirSync(protoDir)
    .filter(filename => filename.match(/\.proto$/))
    .forEach(filename => protobuf.loadProtoFile(protoDir + '/' + filename, builder));

module.exports = builder.build("POGOProtos");