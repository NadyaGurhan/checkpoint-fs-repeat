const fs = require('fs');


const getPadawanNames = () => fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');

const getLightsaberScores = () => fs.readFileSync('./data/scores.txt', 'utf-8')
.trim()
.split('\n')
.map((el) => Number(el));

// const getStats = (getPadawanNames(), getLightsaberScores()) => [getPadawanNames(), getLightsaberScores()];

// const writeStats = (getStats()) => fs.writeFileSync('./data/stats.txt', getStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // // getStats,
  // writeStats,
};
