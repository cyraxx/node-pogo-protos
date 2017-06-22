# Updating to latest protos

1. Clone/pull latest [POGOProtos](https://github.com/AeonLucid/POGOProtos)
2. Copy old folder from `src\POGOProtos` to the `proto` directory
3. Execure `node compile.js` in `proto` directory
4. Execute in node-pogo-protos directory:
    - `npm run compile`
    - `npm run ts`
5. Bump version number (same version as POGOProtos) in `package.json` and add version tag
