const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync(`${__dirname}/data/padawans.txt`, { encoding: 'utf8' }).trim().split('\n').map((x) => x.trim());
}

function getLightsaberScores() {
  return fs.readFileSync(`${__dirname}/data/scores.txt`, { encoding: 'utf8' }).trim().split('\n').map((x) => Number(x.trim()));
}

function getStats() {
  const padawans = getPadawanNames();
  const lightsaberScores = getLightsaberScores();
  return padawans.map((x, i) => [x, lightsaberScores[i]]);
}

function writeStats() {
  const stats = getStats().map((x) => x.join(' ')).join('\n');
  fs.writeFileSync(`${__dirname}/data/stats.txt`, stats, { encoding: 'utf8' });
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
