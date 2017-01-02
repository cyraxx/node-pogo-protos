# Updating to latest protos

1. Clone/pull latest [POGOProtos](https://github.com/AeonLucid/POGOProtos)
2. Execute `./compile_single.py -d` in POGOProtos directory
3. Copy all the `.proto` from POGOProtos `tmp` directory into node-pogo-protos `proto` directory (empty it first in case some protos have been removed/renamed)
4. Execute `./generate-typings.sh` in node-pogo-protos directory
5. Bump version number (same version as POGOProtos) in `package.json` and add version tag
