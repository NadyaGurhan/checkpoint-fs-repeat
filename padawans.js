const { error } = require('console');
const fs = require('fs')
const {EOL} = require('os')

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf8').trim().split(EOL)
}

function getLightsaberScores() {
  return fs.readFileSync('./data/scores.txt', 'utf8').split(EOL).map(Number).sort((a, b) => b - a)
}

function getStats(){
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  if(names.length !== scores.length){
    console.log('error');
  }
  return names.map((name, index) => [name, scores[index]])
}

function writeStats(){
  const stats = getStats();
  return fs.writeFileSync('./data/stats.txt', stats)
}

writeStats()

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};