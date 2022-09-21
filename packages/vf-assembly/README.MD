## Guide to creating a simple wasm and consuming it in JS

### Steps

- `mkdir simple-project && cd $_ && code .`
- `yarn init -y`
- `volta pin node yarn`
- `yarn add @assemblyscript/loader`
- `yarn add -D assemblyscript`
- `npx asinit . -y`
- create and export some WebAssembly code
- `yarn asbuild:release`
- start live server in index.html
