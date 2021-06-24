const fs = require('fs');

const getPadawanNames = () => fs.readFileSync('./data/padawans.txt', 'utf8').trim().split('\n');
//console.log(getPadawanNames())

const getLightsaberScores = () => fs.readFileSync('./data/scores.txt', 'utf8').trim().split('\n').map((el) => Number(el));
//console.log(getLightsaberScores())

const getStats = () => {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  return padawans.map((el, i) => [el, scores[i]]);
  // console.log(padawans)
  // console.log(scores)
}
//console.log(getStats())

const writeStats = (stats) => {
  const data = stats.map((el) => el.join(' ')).join(' \n');
  fs.writeFileSync('./data/stats.txt', data);
}

writeStats(getStats())

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
