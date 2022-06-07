function getPadawanNames() {
  const fs = require('fs');
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf8');
  const arr = []
  const slpitPadawans = padawans.split('\n');
  for (let i = 0; i < slpitPadawans.length - 1; i++) {
    arr.push(slpitPadawans[i]);
  }
  return arr;
}

module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};
