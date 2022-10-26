// run `node index.js` in the terminal
var importObject = null;
WebAssembly.instantiateStreaming(fetch('./gl/gleam_wasm_bg.wasm'), importObject).then(function (obj) {
    // Call an exported function:
    console.log("something");
});
console.log("Hello Node.js!");
