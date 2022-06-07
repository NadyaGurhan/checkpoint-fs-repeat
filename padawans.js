
const fs = require ('fs');
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};


const getPadawanNames = fs.readFileSync('.data/padawans.txt', 'utf8');
const getLightsaberScores = fs.getLightsaberScores('.data/scores.txt', 'utf8');