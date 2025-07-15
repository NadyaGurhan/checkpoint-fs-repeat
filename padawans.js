const fs = require('fs');

function getPadawanNames() {
  const newArr = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return newArr.split('\n');
}

function getLightsaberScores() {
  const newArr = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  const result = newArr.map(i => +i) 
  return result
}

function getStats() {
  const name = getPadawanNames();
  const number = getLightsaberScores();
  const status = []
  for (let i = 0; i < name.length; i++){
      status.push([name[i],number[i]])
  }
  return status
}

function writeStats() {
 let newStatus = getStats()
}

console.log(getPadawanNames());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
