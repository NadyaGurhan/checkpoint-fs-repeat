const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', { encoding: 'utf8', flag: 'r' });
  return padawans.split('\n');
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', { encoding: 'utf8', flag: 'r' });
  return scores.split('\n').map((el) => Number(el));
}

function getStats() {
  const padawans = fs.readFileSync('./data/padawans.txt', { encoding: 'utf8', flag: 'r' });
  const scores = fs.readFileSync('./data/scores.txt', { encoding: 'utf8', flag: 'r' });
  const arrPadawans = padawans.split('\n');
  const arrScores = scores.split('\n');
  const stats = [];
  for (let i = 0; i < arrPadawans.length; i++) {
    const padawan = [];
    padawan.push(arrPadawans[i], Number(arrScores[i]));
    stats.push(padawan);
  }

  return stats;
}

function writeStats() {
  const toWrite = getStats().map((el) => el.join(' '));
  fs.appendFileSync('data/stats.txt', toWrite.join('\n'));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
