const fs = require('fs')
const names = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').filter(element => element.length !== 0);
const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');

function getPadawanNames() {
  return names;
}

function getLightsaberScores() {
  let score = [];
  for (let i = 0; i < scores.length; i++) {
    score.push(+scores[i])
  }
  return score;
}

function getStats() {
  let score = [];
  for (let i = 0; i < scores.length; i++) {
    score.push(+scores[i])
  }
  let stats = [];
  for (let i = 0; i < names.length; i++) {
    let stat = [];
    stat.push(names[i]);
    stat.push(score[i]);
    stats.push(stat);
  }
  return stats;
}

function writeStats() {
  let stats = getStats();
  let status = [];
  for (let i = 0; i < stats.length; i++) {
    let element = [];
    element.push(stats[i][0]);
    element.push(stats[i][1]);
    status.push(element);
  }
  fs.writeFileSync('./data/stats.txt', status.join('\n').replace(/[,]/g, ' '), 'utf-8');
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
