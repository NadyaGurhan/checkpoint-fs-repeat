const fs = require('fs')

function getPadawanNames(){
  return fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n')
}

function getLightsaberScores() {
  const readFile =  fs.readFileSync('./data/scores.txt', 'utf-8');
  return readFile.split('\n').map((el) => Number(el))
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
