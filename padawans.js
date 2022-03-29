const fs = require('fs')
const getPadawanNames = fs.readFileSync('data/padawans.txt', 'utf-8').split('\n').slice(0, 4)
const getLightsaberScores = fs.readFileSync('data/scores.txt', 'utf-8').split('\n').map(string => +string)
// const getStats =
  // const writeStats




module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
