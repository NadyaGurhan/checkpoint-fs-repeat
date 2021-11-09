const fs = require('fs');
const getPadawanNames = () => {
  const res = fs.readFileSync('data/padawans.txt', 'utf-8').trim().split('\n');
  return res;
};
const getLightsaberScores = () => {
  const res = fs
    .readFileSync('data/scores.txt', 'utf-8')
    .trim()
    .split('\n')
    .map((score) => Number(score));
  return res;
};

const getStats = () => {
  const scores = getPadawanNames();
  const padawans = getLightsaberScores();
  const stats = scores.map((item, i) => [item, padawans[i]]);
  return stats;
};
const writeStats = () => {
  const res = getStats();
  const changedData = res.map((padawan) => padawan.join(' ')).join('\n');
  fs.writeFileSync('data/stats.txt', changedData);
};
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
