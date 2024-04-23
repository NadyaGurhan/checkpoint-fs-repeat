const fs = require('fs');

function getPadawanNames() {
  return fs
    .readFileSync(`${__dirname}/data/padawans.txt`, 'utf-8')
    .trim()
    .split('\n');
}

function getLightsaberScores() {
  return fs
    .readFileSync(`${__dirname}/data/scores.txt`, 'utf-8')
    .trim()
    .split('\n')
    .map((e) => +e);
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  return padawans.map((padawan, i) => [padawan, +scores[i]]);
}

function writeStats() {
  const stats = getStats();
  fs.writeFileSync(
    `${__dirname}/data/stats.txt`,
    stats.map((e) => e.join(' ')).join('\n'),
  );
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

writeStats();
