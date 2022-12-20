const fs = require('fs')

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};

function getPadawanNames (){
  let padavans = fs.readFileSync('./data/padawans.txt', 'utf-8')

  return padavans.split(' ')
}

function getLightsaberScores(){
  let scores = fs.readFileSync ('./data/scores.txt', 'utf-8')
  return scores.split(',')
}