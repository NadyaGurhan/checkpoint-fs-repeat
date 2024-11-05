const fs = require('fs');
const { EOL } = require('os');

function getPadawanNames() {
  return fs.readFileSync('data/padawans.txt', 'utf8').split(EOL).slice(0, -1);
}

function getLightsaberScores() {
  const arr = fs.readFileSync('data/scores.txt', 'utf8').split(EOL);
  return arr.map((el) => +el);
}

function getStats() {
  const res = [];
  const padavans = fs.readFileSync('data/padawans.txt', 'utf8').split(EOL).slice(0, -1);
  const scores = fs.readFileSync('data/scores.txt', 'utf8').split(EOL);

  for (let i = 0; i < padavans.length; i++) {
    res.push([padavans[i], +scores[i]]);
  }

  return res;
}

function writeStats() {
  const stats = getStats();
  const str = stats.map(([padawan, score]) => `${padawan} ${score}`).join('\n');
  fs.writeFileSync('data/stats.txt', str);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
