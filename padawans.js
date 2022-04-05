const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').filter(padawan => padawan !== '');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');


function getPadawanNames() {
  return padawans;
}

function getLightsaberScores() {
  for (let i = 0; i < scores.length; i++) {
    scores[i] = +scores[i];
  }
  return scores;
}

function getStats() {
  let resultStats = [];
  for (let i = 0; i < padawans.length; i++) {
    let stats = [];
    for (let j = 0; j < 2; j++) {
      if (j === 0) {
        stats.push(padawans[i]);
      } else {
        stats.push(+scores[i]);
      }
    }
    resultStats.push(stats)
  }
  return resultStats;
}

function writeStats() {
  let statistic = [];
  for (let i = 0; i < getPadawanNames().length; i++) {
    statistic.push(getStats()[i].toString().replace(',', ' '));
    console.log(statistic[i]);
  }
  for (let i = 0; i < statistic.length; i++) {
    if( i === statistic.length - 1) {
      fs.appendFileSync('./data/stats.txt', statistic[i], 'utf-8');
    } else {
      fs.appendFileSync('./data/stats.txt', statistic[i] + '\n', 'utf-8');
    }
  }
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
