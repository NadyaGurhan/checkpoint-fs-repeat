const fs = require('fs');

const getPadawanNames = () => {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const padawansList = padawans.split('\n');
  padawansList.splice(padawansList.length - 1, 1);

  return padawansList;
};

const getLightsaberScores = () => {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
  const scoresList = scores.split('\n');
  // scoresList = scoresList.
};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};

console.log(getLightsaberScores());
