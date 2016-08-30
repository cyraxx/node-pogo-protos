#!/usr/bin/env bash

set -e # Abort on first error

mkdir -p tmp

# Convert proto files into intermediate JSON
`npm bin`/pbjs proto/POGOProtos.proto > tmp/POGOProtos.json

# Create definition file from intermediate JSON
`npm bin`/npp2ts -f tmp/POGOProtos.json > pogo-protos.d.ts

# Format definition file
`npm bin`/tsfmt -r pogo-protos.d.ts

