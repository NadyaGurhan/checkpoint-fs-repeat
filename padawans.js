const fs = require('fs')

function getPadawanNames(){
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8').trim();
  return names.split('\n')
}

function getLightsaberScores (){
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map((el) => Number(el));
  return scores
}

function getStats (){
  
}

// дальше не успела сделать, были проблемы с зависимостями

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  //writeStats,
};
