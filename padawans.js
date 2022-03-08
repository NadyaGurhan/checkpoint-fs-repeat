const fs = require('fs')

function getPadawanNames() {
  const pada = fs.readFileSync('./data/padawans.txt', 'utf-8')
  return pada.split('\n').filter(el => el !== '')
}

function getLightsaberScores() {
  const sco = fs.readFileSync('./data/scores.txt', 'utf-8')
  return sco.split('\n').map(s => +s)
}

function getStats() {
  let pad = getPadawanNames()
  let scor = getLightsaberScores()
  let result = pad.map((a, b) => [a, scor[b]])
  return result
}

function writeStats() {
  const result = getStats().join('\n');
  const statc = './data/stats.txt';
  return fs.writeFileSync(statc, result.replaceAll(',', ' '));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
