const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8');

const getPadawanNames = () => padawans.trim().split('\n');

const getLightsaberScores = () => scores.split('\n').map((el) => Number(el));

const getStats = () => {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  const newArr = [];
  for (let i = 0; i < padawans.length; i++) {
    newArr.push([padawans[i], scores[i]]);
  }
  return newArr;
};

const writeStats = () => {
  const stats = getStats();
  for (let i = 0; i < stats.length; i++) {
    if (i === stats.length - 1) {
      fs.appendFileSync('data/stats.txt', `${stats[i].join(' ')}`);
    } else { fs.appendFileSync('data/stats.txt', `${stats[i].join(' ')}\n`); }
  }
  console.log(stats);
};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
