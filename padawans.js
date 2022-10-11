const fs = require('fs');

const padawans = (fs.readFileSync('./data/padawans.txt', 'utf8').split('\n')).slice(0, -1);
const scores = (fs.readFileSync('./data/scores.txt', 'utf8').split('\n')).map((el) => Number(el));

const getPadawanNames = () => padawans;
const getLightsaberScores = () => scores;
const getStats = () => padawans.map((el, i) => [el, scores[i]]);
const writeStats = () => fs.writeFileSync('./data/stats.txt', `${(getStats()).join('\n').split(',').join(' ')}`);

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
