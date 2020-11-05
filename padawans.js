const fs = require('fs');

function getPadawanNames() {
  const data = fs.readFileSync('data/padawans.txt', 'utf-8').trim().split('\n');
  return data;
}

function getLightsaberScores() {
  const data = fs
    .readFileSync('data/scores.txt', 'utf-8')
    .split('\n')
    .map((el) => +el);
  return data;
}

function getStats() {
  const padawans = getPadawanNames();
  const score = getLightsaberScores();

  const data = [];
  for (let i = 0; i < padawans.length; i++) {
    data.push([padawans[i], score[i]]);
  }

  return data;
}

function writeStats() {
  const data = getStats();
  let str = '';
  data.forEach((a) => (str += `${a[0]} ${a[1]}\n`));
  fs.writeFileSync('data/stats.txt', str.slice(0, str.length - 1));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
