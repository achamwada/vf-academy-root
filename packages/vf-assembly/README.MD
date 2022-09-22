### Quick start guide

##### Steps

- `mkdir simple-project && cd $_ && code .`
- `yarn init -y`
- `volta pin node yarn` (This is optional)
- `yarn add @assemblyscript/loader`
- `yarn add -D assemblyscript`
- `npx asinit . -y`
- create and export some WebAssembly code
- `yarn asbuild:release`
- start live server in index.html

##### long command

`cd && mkdir simple-project && cd $_ && code . && yarn init -y && volta pin node yarn && yarn add @assemblyscript/loader && yarn add -D assemblyscript && npx asinit . -y && yarn asbuild:release`
