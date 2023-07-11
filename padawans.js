const fs = require('fs')

function getPadawanNames(){
  const newFs = fs.readFileSync('/data/padawans.txt', 'utf-8').split(' ')
  return newFs
}

function getLightsaberScores(){
  const newLight = fs.readFileSync('/data/scores.txt', 'utf-8').split(' ')
  
  return newLight
}

function getStats(){

}

function writeStats(){
  
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
