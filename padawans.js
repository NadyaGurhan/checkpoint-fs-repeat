

function getPadawanNames(padawans) {
  const fs = require('fs');
  const names = fs.readFileSync('data/padawans.txt.txt', 'utf-8');
  const padawans = names.split('\n');
  // console.log(padawans);
return padawans;
}
getPadawanNames(padawans);






module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
