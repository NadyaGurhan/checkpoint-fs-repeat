
const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').slice(0, -1).split('\n');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map(el => +el);
console.log(padawans);

const getPadawanNames = () => padawans;

const getLightsaberScores = () => scores;

const getStats = () => padawans.map((el, i) => [el, scores[i]]);

const writeStats = () => fs.writeFileSync('./data/stats.txt', getStats().map((el) => el.join(' ')).join('\n'));

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};











module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
