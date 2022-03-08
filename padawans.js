const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf8');
const scores = fs.readFileSync('./data/scores.txt', 'utf8');
const padawansArr = padawans.trim().split('\n')
const scoresArr = scores.split('\n')


function getPadawanNames() {
  return padawansArr;
}

function getLightsaberScores() {
  scoresNum = []
  for (let i = 0; i < scoresArr.length; i += 1) {
    scoresNum.push(parseFloat(scoresArr[i]));
  }
  
  return scoresNum;
}

function getStats() {
  let stats = [];

  for (let i = 0; i < scoresArr.length; i += 1) {
    let arr = [];    
    arr.push(padawansArr[i], parseFloat(scoresArr[i]));
    stats.push[arr];
  }

  return stats;
}

function writeStats() {

}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
