const fs = require('fs')
const padawansText = fs.readFileSync('./data/padawans.txt', 'utf8');
const padawans = padawansText.split('\n');

const scoresText = fs.readFileSync('./data/scores.txt', 'utf8');
const scores = scoresText.split('\n');

const getPadawanNames = () => {
  return padawans.slice(0,4);
}

const getLightsaberScores = () => {
return scores.map((a) => Number(a));
}

const getStats = () => {
  let scores1 = scores.map((a) => ' ' + a);
  return padawans[0].concat(scores1[0]);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
