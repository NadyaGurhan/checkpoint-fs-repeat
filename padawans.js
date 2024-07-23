const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').slice(0, -1);
}

function getLightsaberScores() {
  return fs
    .readFileSync('./data/scores.txt', 'utf-8')
    .split('\n')
    .map((item) => Number(item));
}
const padawans = getPadawanNames();
const scores = getLightsaberScores();

function getStats() {
  const result = [];
  for (let i = 0; i < padawans.length; i++) {
    result.push([padawans[i], scores[i]]);
  }
  return result;
}

const stats = getStats(); // получили статистику

function writeStats() {
  fs.writeFileSync(
    './data/stats.txt',
    stats
      .join('\n')
      .split('\n')
      .map((item) => item.replace(',', ' '))
      .join('\n'),
    'utf8',
  );
  const data = fs.readFileSync('data/stats.txt', 'utf8');
  return data;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
