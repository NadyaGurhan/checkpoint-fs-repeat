const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};


function getPadawanNames() {
  const data = fs.readFileSync('./data/padawans.txt', 'utf8').split(' ')
  return data
}


function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf8').split(' ');
  return scores
}

function getStats() {

}

function writeStats() {

}