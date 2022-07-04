const fs = require('fs');
const { stdout } = require('process');

let texto = fs.readFileSync(process.argv[2])
texto = texto.toString()

let espacos = []
espacos = texto.split('\n');

console.log(espacos.length - 1)