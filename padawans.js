const fs = require('fs');

const padawans = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf-8');
function getPadawanNames() {
  console.log(padawans);
  console.log(typeof padawans);
  console.log(padawans.split('\n').slice(0, -1));
  return padawans.split('\n').slice(0, -1);
}

module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};
