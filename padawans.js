const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync('data/padawans.txt', 'utf-8').split('\n').slice(0, -1);
}

function getLightsaberScores() {
  return fs.readFileSync('data/scores.txt', 'utf-8').split('\n').map((el) => el = Number(el));
}

function getStats() {
  const padawan = fs.readFileSync('data/padawans.txt', 'utf-8').split('\n').slice(0, -1);
  const score = fs.readFileSync('data/scores.txt', 'utf-8').split('\n').map((el) => el = Number(el));
  const result = [];
  for (let i = 0; i < padawan.length; i += 1) {
    const arr = [padawan[i], score[i]];
    result.push(arr);
  }
  return result;
}

function writeStats(data) {
  const str = data.map((el) => el = el.join(' ')).join('\n');
  return fs.writeFileSync('data/stats.txt', str);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const stats = getStats();
console.log(writeStats(stats));
