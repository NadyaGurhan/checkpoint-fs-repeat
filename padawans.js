const fs = require('fs')

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  return names.filter((el) => el !== '');
}

function getLightsaberScores() {
  const score = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  return score.map((el) => +el);
}

function getStats() {
  const res = [];
  getPadawanNames().forEach((el, i) => {
    res.push([el, getLightsaberScores()[i]]);
  });
  return res;
}

function writeStats() {
  const stats = getStats().map((el) => el.join(' ')).join('\n');
  fs.writeFileSync('./data/stats.txt', `${stats}`);
  // console.log(stats);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
