const fs = require('fs');

function getPadawanNames() {
  const padawansList = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
  return padawansList;
}

function getLightsaberScores() {
  const scoresArr = [];
  const scoresList = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  scoresList.forEach((el) => {
    scoresArr.push(Number(el));
  });
  return scoresArr;
}

function getStats() {
  const stats = [];
  const padawansList = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
  const scoresList = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');

  for (let i = 0; i < padawansList.length; i += 1) {
    stats.push([padawansList[i], Number(scoresList[i])]);
  }
  return stats;
}

function writeStats() {
  const padawansList = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
  const scoresList = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  let stats = '';
  
  for (let i = 0; i < padawansList.length; i += 1) {
    let tmp = '';
    tmp = padawansList[i] + ' ' + scoresList[i] + '\n';
    stats += tmp;
  }
  let result = fs.writeFileSync('./data/stats.txt', stats.trim());
}



module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
