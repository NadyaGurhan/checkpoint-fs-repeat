const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf8');
  const _arr = padawans.split('\n');
  _arr.pop();
  return _arr;
}
function getLightsaberScores() {
  const saber = fs.readFileSync('./data/scores.txt', 'utf8');
  const _arr = saber.split('\n');
  return _arr.map((item) => +item);
}
function getStats() {
  const padawans = getPadawanNames();
  const saber = getLightsaberScores();
  const _arr = [];
  for (let i = 0; i < padawans.length; i++) {
    _arr.push([padawans[i], saber[i]]);
  }
  return _arr;
}
function writeStats() {
  let results = getStats().join('\n');
  results = results.replace(/,/gi, ' ');
  fs.writeFileSync('./data/stats.txt', results, 'utf-8');
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
