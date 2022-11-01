const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf-8').trim().split('\n');
}

function getLightsaberScores() {
  return fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf-8').split('\n').map(el => +el);
}

function getStats() {
  const names = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf-8').trim().split('\n');
  const scores = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf-8').split('\n').map(el => +el);

  return names.map((name, i) => [name, scores[i]]);
}

function writeStats() {
  const names = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf-8').trim().split('\n');
  const scores = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf-8').split('\n').map(el => +el);
  fs.writeFileSync(`${__dirname}/data/stats.txt`, names.map((name, i) => [name, scores[i]]).map(el => el.join(' ')).join('\n'));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
