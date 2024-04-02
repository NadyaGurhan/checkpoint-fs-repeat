const fs = require('fs');

function getPadawanNames() {
  const namesArr = fs.readFileSync('./data/padawans.txt', 'utf-8').toString().split('\n');
  namesArr.length = namesArr.length - 1
  return namesArr;
}

function getLightsaberScores() {
  const scoresArr =fs.readFileSync('./data/scores.txt', 'utf-8').toString().split('\n');
  return scoresArr;
}

function getStats() {
  const namesArr = fs.readFileSync('./data/padawans.txt', 'utf-8').toString().split('\n');
  const scoresArr = fs.readFileSync('./data/scores.txt', 'utf-8').toString().split('\n');
  const newArr = [[], [], [], []];
  for (let i = 0; i < namesArr.length; i++) {
    
    newArr.push();
  }
}

function writeStats() {

}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
