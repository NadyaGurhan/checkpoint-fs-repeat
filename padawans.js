const fs = require('fs');
// const path = require('path');

const getPadawanNames = () => {
  const data = fs.readFileSync('./data/padawans.txt', 'utf8');
  return data.split('\n');
};

const getLightsaberScores = () => {
  const data = fs.readFileSync('./data/scores.txt', 'utf8');
  return data.split('\n').map((element) => Number(element));
};
const getStats = () => {
  const names = getPadawanNames();
  const scores = getLightsaberScores();

  const array = [];
  for (let i = 0; i < names.length; i += 1) {
    array.push([names[i], scores[i]]);
  }
  return array;
};
const writeStats = () => {
  const stats = getStats().map((stat) => stat.join(' ')).join('\n');
  //console.log(stats)
  fs.writeFileSync('data/stats.txt', stats, 'utf8');
};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
