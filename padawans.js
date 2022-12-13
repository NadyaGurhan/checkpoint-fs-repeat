const fs = require('fs')

const getPadawanNames = () => fs
  .readFileSync('./data/padawans.txt', 'utf8')
  .trim()
  .split('\n');

const getLightsaberScores = () => fs
  .readFileSync('./data/scores.txt', 'utf8')
  .trim()
  .split('\n')
  .map(Number);

const getStats = () => {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  return padawans
    .map((el, index) => [padawans[index], scores[index]]);
};

const writeStats = () => {
  let stats = '';
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  padawans.forEach((el, index) => {
    if (index !== padawans.length - 1) {
      stats = `${stats}${padawans[index]} ${scores[index]}\n`;
    } else {
      stats = `${stats}${padawans[index]} ${scores[index]}`;
    }
  });
  fs.writeFileSync('./data/stats.txt', stats.trim(), 'utf8');
};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
