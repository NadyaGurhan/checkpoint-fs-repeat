const fs = require('fs')

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf8')
    .split('\n')
    .slice(0, -1)

}
function getLightsaberScores() {
  return fs.readFileSync('./data/scores.txt', 'utf8')
    .split('\n')
    .map(el => Number(el))

}
function getStats() {
  const name = getPadawanNames();
  const res = getLightsaberScores();
  return name.map((el, index) => [el, res[index]])
}

function writeStats(stats) {
  stats = getStats()
  stats = stats.map(el => el.join(' ')).join('\n')
  fs.writeFileSync('data/stats.txt', stats, 'utf-8')
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
