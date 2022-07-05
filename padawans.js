const fs = require('fs')

function getPadawanNames () {
  let arr = fs.readFileSync('data/padawans.txt', 'utf-8').split('\n');
  return arr.slice(0, arr.length - 1)
}

function getLightsaberScores(){
  let arr = fs.readFileSync('data/scores.txt', 'utf-8').split('\n');
  return arr.map(item => +item) 
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
