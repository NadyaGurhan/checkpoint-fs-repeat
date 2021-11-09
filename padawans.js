const fs = require('fs');
const readData = fs.readFileSync('data/padawans.txt', 'utf8');

function getPadawanNames() {
  const padawans = readData.split('\n');
  padawans.pop();
  return padawans;
}

const readScores = fs.readFileSync('data/scores.txt', 'utf8');

function getLightsaberScores() {
  const scores = readScores.split('\n');
  return scores.map((item) => Number(item));
}

function getStats() {
  const table = [];
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  for (let i = 0; i < padawans.length; i += 1) {
    table.push([padawans[i], scores[i]]);
  }
  // fs.writeFileSync('data/stats.txt', `${table}`);
  return table;
}

function writeStats() {
  const stats = getStats();
  const res = stats.join('\n');
  const newRes = res.replace(',', ' ');
  fs.writeFileSync('data/stats.txt', `${newRes}`);
}

writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
