const fs = require('fs')
const padawans = fs.readFileSync('./data/padavans.txt','utf8')
const scores = fs.readFileSync('./data/scores.txt','utf8')

function getPadawanNames() {
  return padawans.split('\n')
}

function getLightsaberScores() {
  return scores.split('\n')
}

function getstats() {

}


function writeStats() {

}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
