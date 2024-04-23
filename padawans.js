const fs = require('fs');

function getPadawanNames() {
  const data = fs.readFileSync('./data/padawans.txt', 'utf8').trim().split('\n');
  return data;
}

function getLightsaberScores() {
  const data = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');
  for (let i = 0; i < data.length; i += 1) {
    data[i] = +data[i];
  }
  return data;
}

function getStats() {
  const stats = [];
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  for (let i = 0; i < padawans.length; i += 1) {
    stats.push([padawans[i], scores[i]]);
  }
  return stats;
}
function writeStats(data) {
  let result = data.map((element) => element.join(' '));

  result = result.join('\n');
  fs.writeFileSync('./data/stats.txt', result);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
