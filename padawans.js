const { equal } = require('assert')
const fs =require('fs')
const { EOL } = require('os')

function getPadawanNames(){
  const data =fs.readFileSync('data/padawans.txt')
  return data.split(EOL).filter(line=>line.trim() !=='')
}
function getLightsaberScores(){
  const data =fs.writeFileSync('data/score.txt')
  return data.split(EOL).filter(line => line.trim() !== '').map(Number);

}
function writeStats(stats) {
  const content = stats.map(([name, score]) => `${name} ${score}`).join(EOL) + EOL;
  fs.writeFileSync('data/stats.txt', content, 'utf8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

