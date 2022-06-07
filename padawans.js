const fs = require('fs');
const { resourceLimits } = require('worker_threads');

function getPadawanNames() {
  const padawansList = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').slice(0, 4);
  return padawansList;
}

function getLightsaberScores() {
  const scoreList = [];
  const score = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  for (let i = 0; i < score.length; i++) {
    scoreList.push(Number(score[i]));
  }
  return scoreList;
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  const arrStats = [];
  for (let i = 0; i < padawans.length; i++) {
    arrStats.push([padawans[i], scores[i]]);
  }
  return arrStats;
}

function writeStats() {
  const rem = getStats();
  const result = [];
  for (let i = 0; i < rem.length; i++) {
    if (rem[i] != ',')
    result.push(rem[i].join(' ').split(','));
  } 
  fs.writeFileSync(`./data/stats.txt`, `${result.join('\n')}`);
  return result;
}

//console.log(writeStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
