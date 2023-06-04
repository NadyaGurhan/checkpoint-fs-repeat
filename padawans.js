const fs = require('fs');

function getPadawanNames() {
  const text = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf-8');
  const array = text.split('\n');
  return array;
}

function getLightsaberScores() {
  const text = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf-8');
  const array = text.split('\n')
    .map((el) => Number(el));
  return array;
}

function getStats() {
  const stat = getPadawanNames().map(((el, i) => el + getLightsaberScores[i]));
  return stat;
}
console.log(getStats());

function writeStats() {
  // const stats = getStats().map((el) => el.join(' '));
  const stats = getStats();
  const data = stats.join('\n')

  fs.writeFileSync('./data/stats.txt', data)
  return stats;
}
writeStats()

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
