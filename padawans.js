const fs = require('fs');

const padawans = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf-8');
const scores = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf-8');

function getPadawanNames() {
  return padawans.split('\n').slice(0, -1);
}

function getLightsaberScores() {
  return scores.split('\n').map((el) => +el);
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  const stats = [];
  let arr = [];
  for (let i = 0; i < padawans.length; i += 1) {
    arr.push(padawans[i], scores[i]);
    stats.push(arr);
    arr = [];
  }
  return stats;
}

function writeStats() {
  const filePath = 'data/stats.txt';
  const statsArr = getStats().map((el) => el.join(' '));

  const data = `${statsArr.join('\n')}`;
  return fs.writeFileSync(filePath, data);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
