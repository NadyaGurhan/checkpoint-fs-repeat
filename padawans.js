const fs = require('fs');
const { EOL } = require('os');

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

function writeStats() {
const stats = getStats()
const file = stats.map(item => item.join(' ')).join(EOL)
fs.writeFileSync('./data/stats.txt', file);
}
console.log (writeStats)

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
