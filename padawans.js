const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  names.pop();
  return names;
}

function getLightsaberScores() {
  const arr = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  const scores = arr.map((el) => +el);
  return scores;
}

function getStats() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  names.pop();

  const arr = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  const scores = arr.map((el) => +el);

  const stats = Array.from({ length: names.length }, () => []);

  for (let i = 0; i < names.length; i += 1) {
    stats[i].push(names[i]);
    stats[i].push(scores[i]);
  }

  return stats;
}

function writeStats() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  names.pop();

  const arr = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  const scores = arr.map((el) => +el);

  const stats = Array.from({ length: names.length }, () => []);

  for (let i = 0; i < names.length; i += 1) {
    stats[i].push(names[i]);
    stats[i].push(scores[i]);
  }

  let data = stats.map((el) => el.join(' '));
  data = data.join('\n');
  fs.writeFileSync('./data/stats.txt', data);
}
