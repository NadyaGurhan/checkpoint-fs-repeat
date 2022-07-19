const fs = require('fs');

const padawans = fs.readFileSync('data/padawans.txt', 'utf8');
const scores = fs.readFileSync('data/scores.txt', 'utf8');

const getPadawanNames = () => {
  const padawansNames = padawans.split('\n');
  const popped = padawansNames.pop();
  return padawansNames;
};

const getLightsaberScores = () => {
  //const padawanScores = scores.split('\n');

  return scores;
};
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
