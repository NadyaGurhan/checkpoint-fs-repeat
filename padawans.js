const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
};


module.exports = {
  // eslint-disable-next-line no-use-before-define
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};
