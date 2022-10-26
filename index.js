// run `node index.js` in the terminal
var importObject = null;
const fs = require('fs');

const wasmBuffer = fs.readFileSync('./gleam-wasm/gleam_wasm_bg.wasm');
console.log(new Uint8Array(wasmBuffer));
WebAssembly.instantiate(new Uint8Array(wasmBuffer));
