const fs = require('fs');

const getPadawanNames = fs.readFileSync('./data/padawans.txt', 'utf-8');

function getPadawanNamesFun() {
  return getPadawanNames.trim().split('\n');
}

module.exports = getPadawanNamesFun;
