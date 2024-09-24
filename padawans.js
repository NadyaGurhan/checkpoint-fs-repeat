const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const getPadawan = fs.readFileSync('./date/padawans.txt')
  return getPadawan.split('\n')
}

function getLightsaberScores(){
  const getScores = fs.readFileSync('./data/scores.txt')
  const num = getScores.split('\n')
  return Number(num)
}

function getStats() {

}

function writeStats(){
  
}