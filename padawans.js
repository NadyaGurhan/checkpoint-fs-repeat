const fs = require('fs');

function getPadawanNames() {
  const file = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const result = file.trim().split('\r\n');
  return result;
}

function getLightsaberScores() {
  const data = fs.readFileSync('./data/scores.txt', 'utf-8');
  const result = data.trim().split('\r\n').map(Number);
  return result;
}

function getStats (){
const dirPadawans = getPadawanNames()
const dirScores = getLightsaberScores()
const newdir = dirPadawans.map((names, index) => [names, dirScores[index]])
console.log (newdir)
return newdir 
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
