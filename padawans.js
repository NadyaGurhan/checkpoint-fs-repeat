const fs = require('fs');

function getPadawanNames() {
  let names = fs.readFileSync('./data/padawans.txt', 'utf8');
  let result = [];
  let str = '';

  //str = names.replace('/\n/g', '');

  for (let i = 0; i < names.length; i += 1) {
    if (names[i] !== '\n') {
      str += names[i];
    } else {
      str += ' ';
    }
  }

  return str.split(' ');
}

function getLightsaberScores() {}

function getStats() {}

function writeStats() {}

console.log(getPadawanNames());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
