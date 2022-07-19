const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  let str = '/.data/padawans.txt'
  return str.split('\n');
}

getPadawanNames();

// function getLightsaberScores ('/data/scores.txt') {
//   return
// }
