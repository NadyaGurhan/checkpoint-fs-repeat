const fs = require('fs');

const names = fs.readFileSync('./data/padawans.txt', 'utf-8')
  .split('\n')
  .slice(0, -1);

const scores = fs.readFileSync('./data/scores.txt', 'utf-8')
  .split('\n')
  .map((el) => Number(el));

// const data = fs.writeFileSync('data/stats.txt');
// console.log(data)

const getPadawanNames = () => names;

const getLightsaberScores = () => scores;

const getStats = () => {
  const stats = [];
  for (let i = 0; i < names.length; i++) {
    stats.push([names[i], scores[i]]);
  }
  return stats;
};

const writeStats = () => {
  const res = getStats().join('\n');
  fs.writeFileSync('data/stats.txt', res, 'utf8');
  return res;
};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
