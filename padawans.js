const fs = require('fs');

const data = fs.readFileSync('./data/padawans.txt', 'utf-8');
const arr = data.split('\n');

function getPadawanNames() {
  return arr;
}

module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};
