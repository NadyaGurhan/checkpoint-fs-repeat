const fs = require('fs');
const getPadawanNames = fs.readFileSync('/data/padawans.txt', 'utf8');
  console.log(getPadawanNames());


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
