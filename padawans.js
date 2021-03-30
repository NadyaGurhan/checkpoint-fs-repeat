const fs = require('fs');
const { write } = require('../../core-js-parsing-data-fs/perfect-parser');

function getPadawanNames() {
  let padArr = []
  let list = fs.readFileSync('./data/padawans.txt', 'utf-8')
  padArr = list.split('\n');
  padArr.pop();
  return padArr;
}

function getLightsaberScores() {
  let scoreArr = []
  let list = fs.readFileSync('./data/scores.txt', 'utf-8');
  scoreArr = list.split('\n').map(Number);;
  return scoreArr;
}

function getStats() {
  let names = getPadawanNames()
  let scores = getLightsaberScores()

  return names.map((elem, i) => [elem, scores[i]]);
}

function writeStats() {
  const writeArr = getStats()
    return fs.writeFileSync('./data/stats.txt', writeArr.map((el) => el.join(' ')).join('\n'));
}
writeStats()

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
