const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames (names) {
  const padNames = fs.readFileSync('./data/padawans.txt', "utf8");
  const padavanArr = padNames.join(', ');
  return padavanArr;
}

function getLightsaberScores (names) {
  const padSkill = fs.readFileSync('./data/scores.txt', "utf8");
  const skillArr = padSkill.join(', ');
  return skillArr
}


