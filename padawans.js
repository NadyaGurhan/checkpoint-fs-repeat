const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n').filter((el) => !!(el));
const scores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n').map((el) => +el);
const stats = padawans.map((el, ind) => [el, scores[ind]]);

function getPadawanNames() {
  return padawans;
}

function getLightsaberScores() {
  return scores;
}

function getStats() {
  return stats;
}

function writeStats() {
  const fullName = './data/stats.txt';

  fs.writeFileSync(fullName, '');
  for (let i = 0; i < stats.length; i += 1) {
    const el = `${stats[i][0]} ${stats[i][1]}`;
    if (!i) fs.appendFileSync(fullName, el, 'utf8');
    else fs.appendFileSync(fullName, `\n${el}`, 'utf8');
  }
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
