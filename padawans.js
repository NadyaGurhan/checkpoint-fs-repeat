const fs = require('fs');

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return names.split('\n').splice(0, 4);
}

function getLightsaberScores() {
  const light = fs
    .readFileSync('./data/scores.txt', 'utf-8')
    .split('\n')
    .map((el) => Number(el));
  return light;
}

function getStats() {
  let padawan = getPadawanNames();
  let scores = getLightsaberScores();
  return padawan.map((el, index) => [padawan[index], scores[index]]);
}

function writeStats() {
  let stats = getStats();
  fs.writeFileSync(
    'data/stats.txt',
    stats.join('\n').replaceAll(',', ' '),
    'utf8'
  );
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
