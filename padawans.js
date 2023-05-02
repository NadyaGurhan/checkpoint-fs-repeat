const fs = require('fs');

const padawans = fs
  .readFileSync('./data/padawans.txt', 'utf-8')
  .trim()
  .split('\n');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8').trim().split('\n');
console.log(padawans);

const getPadawanNames = () => {
  return padawans;
};

const getLightsaberScores = () => {
  return scores.map((i) => Number(i));
};

const getStats = () => {
  return padawans.map((val, i) => [val, Number(scores[i])]);
};
const writeStats = () => {
  fs.writeFileSync(
    'data/stats.txt',
    getStats()
      .map((score) => score.join(' '))
      .join('\n')
  );
};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
