const fs = require('fs')

const getPadawanNames = fs.readFileSync('./data/padawans.txt', 'utf8');
console.log([getPadawanNames()]);

const getLightsaberScores = fs.writeFileSync('checkpoint-fs/data/scores.txt', 'utf8');
console.log([getLightsaberScore()]);
// const getStats,
// const writeStats,

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
