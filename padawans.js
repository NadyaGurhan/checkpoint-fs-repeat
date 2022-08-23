const fs = require('fs');

function getPadawanNames() {
  const padawan = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  return padawan.slice(0, padawan.length - 1);
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  return scores.map((el) => Number(el));
}

function getStats() {
  const arr = [];
  const name = getPadawanNames();
  const score = getLightsaberScores();
  for (let i = 0; i < name.length; i++) {
    arr.push([name[i], score[i]]);
  }
  return arr;
}

function writeStats() {
  let stat = getStats();
  console.log(stat.join('\n').split(',').join('\\n'));
}
writeStats()

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
