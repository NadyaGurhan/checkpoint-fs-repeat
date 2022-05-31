const fs = require('fs');

function getPadawanNames() {
  const content = fs.readFileSync('./data/padawans.txt', 'utf8');
  const score = content.trim().split('\n');

  return score;
}

function getLightsaberScores() {
  const content = fs.readFileSync('./data/scores.txt', 'utf8');
  const score = content.split('\n');

  let result = [];

  for (let i = 0; i < score.length; i += 1) {
    result.push(+score[i]);
  }

  return result;
}

function getStats() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf8').trim().split('\n');
  const scores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');

  let result = [];

  for (let i = 0; i < padawans.length; i += 1) {
    result.push([padawans[i], +scores[i]]);
  }

  return result;
}

function writeStats() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf8').trim().split('\n');
  const scores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');

  let result = [];

  for (let i = 0; i < padawans.length; i += 1) {
    result.push([padawans[i], +scores[i]]);
  }

  for (let i = 0; i < result.length; i += 1) {
    result[i] = result[i].join(' ');
  }

  fs.appendFileSync('./data/stats.txt', result.join('\n'), 'utf8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
