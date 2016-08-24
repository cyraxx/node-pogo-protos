#!/usr/bin/env bash

set -e # Abort on first error

mkdir -p tmp

# Convert proto files into intermediate JSON
`npm bin`/pbjs proto/POGOProtos.proto > tmp/POGOProtos.json

# Add references to definition file
echo "/// <reference path=\"bytebuffer.d.ts\" />" > pogo-protos.d.ts
echo "/// <reference path=\"long.d.ts\" />" >> pogo-protos.d.ts

# Create definition file from intermediate JSON
`npm bin`/npp2ts -f tmp/POGOProtos.json >> pogo-protos.d.ts

# Format definition file
`npm bin`/tsfmt -r pogo-protos.d.ts

# Clean up (remove empty lines)
sed -e '/^[[:space:]]*$/d' -i '' pogo-protos.d.ts
