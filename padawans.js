const fs = require('fs')

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  return padawans;
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n')
  const newScores = []
  for(let i = 0; i <scores.length; i++){
    newScores.push(Number(scores[i]))
  }
  return newScores

}

function getStats() {

}
function writeStats() {

}





















module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

