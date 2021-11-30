const fs = require('fs');

const padavans = fs.readFileSync('./data/padawans.txt', 'utf-8');

const scores = fs.readFileSync('./data/scores.txt', 'utf-8');

const getPadawanNames = () => padavans.trim().split('\n');

const getLightsaberScores = () => scores.split('\n').map((el) => Number(el));

const getStats = () => {
  const padavan = getPadawanNames();
  const score = getLightsaberScores();
  return (result = padavan.map((el, i) => [el, score[i]]));
  // return result;
};
const resultOne = getStats();

const writeStats = () => {
  const itog = resultOne.join('\n').split(',').join(' ');
  fs.writeFileSync('data/stats.txt', itog);
};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
