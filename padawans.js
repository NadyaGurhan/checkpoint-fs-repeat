const fs = require('fs');

function getPadawanNames() {
  const file = fs.readFileSync('./data/padawans.txt', 'utf8');
  return file;
}

console.log(getPadawanNames());

module.exports = getPadawanNames;
