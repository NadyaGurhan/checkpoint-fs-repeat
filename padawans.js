const fs = require('fs');
const names = fs.readFileSync('./data/padawans.txt', 'utf-8');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8');

const getPadawanNames = () => {
  return names.split('\n');
};

const getLightsaberScores = () => {
  return scores.split('\n').map((el) => +el);
};

const getStats = () => {
  return getPadawanNames().map((el, i) => [el, getLightsaberScores()[i]]);
};

const writeStats = () => {
  const stat = getStats().map(([name, score]) => `${name} ${score}\n`).join('');
  const withoutEndLine = stat.slice(0, stat.length - 1);
  fs.writeFileSync('./data/stats.txt', withoutEndLine);
};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
