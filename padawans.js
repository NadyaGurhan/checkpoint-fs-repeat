const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const names = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').slice(0, -1);
const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map((el) => +el);

function getPadawanNames() {
  return names;
}

function getLightsaberScores() {
  return scores;
}

function getStats() {
  const stats = Array.from({ length: names.length }, () => []);

  for (let i = 0; i < names.length; i += 1) {
    stats[i].push(names[i]);
    stats[i].push(scores[i]);
  }

  return stats;
}

function writeStats() {
  const stats = Array.from({ length: names.length }, () => []);

  for (let i = 0; i < names.length; i += 1) {
    stats[i].push(names[i]);
    stats[i].push(scores[i]);
  }

  let data = stats.map((el) => el.join(' '));
  data = data.join('\n');
  fs.writeFileSync('./data/stats.txt', data);
}
