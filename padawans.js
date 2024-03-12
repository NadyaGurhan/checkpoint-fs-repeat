const fs = require('fs')
const path = require('path');

function getPadawanNames() {
  const result = fs.readFileSync(
    path.join(__dirname, './data/padawans.txt'),
    'utf-8',
  );

  return result.split('\r\n').slice(0, -1)
}
console.log(getPadawanNames());

function getLightsaberScores() {
  const result = fs.readFileSync(
    path.join(__dirname, './data/scores.txt'),
    'utf-8',
  );

  return result.split('\r\n').map((item) => item = +item)
}
console.log(getLightsaberScores());

function getStats() {
  const padawans = getPadawanNames()
  const ligthsaber = getLightsaberScores()
  const result = []
  for(let i = 0; i < padawans.length; i++) {
    result.push([padawans[i], ligthsaber[i]])
  }

  return result
}
console.log(getStats());

function writeStats() {
  fs.writeFileSync(
    path.join(__dirname, './data/stats.txt'),
    getStats().join('\n').replaceAll(',', ' '),
    'utf-8',
  );
}
writeStats()

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
