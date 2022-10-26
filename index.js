// run `node index.js` in the terminal

import * as fs from 'gleam-wasm/gleam_wasm.js';

console.log(fs);
fs.asyncRead();

console.log('pkg/gleam_wasm_bg.wasm');
