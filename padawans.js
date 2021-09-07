const fs = require('fs');

function getPadawanNames() {
  const files = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const result = files.split('\n');
  result.pop(1);
  return result;
}

function getLightsaberScores() {
  const files = fs.readFileSync('./data/scores.txt', 'utf-8');
  const result = files.split('\n');
  return result.map((el) => Number(el));
}

function getStats() {
  const result = [];
  const score = getLightsaberScores();
  const name = getPadawanNames();
  for (let i in name) {
    const stats = [name[i], score[i]];
    result.push(stats);
  }
  return result;
}

function writeStats() {
  const all = getStats();
  const result = all.join('\n').replace(/,/g, ' ');
  fs.writeFileSync('./data/stats.txt', result);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
