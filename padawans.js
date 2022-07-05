const fs = require('fs')

function getPadawanNames () {
  let arr = fs.readFileSync('data/padawans.txt', 'utf-8').split('\n');
  return arr.slice(0, arr.length - 1)
}

function getLightsaberScores(){
  let arr = fs.readFileSync('data/scores.txt', 'utf-8').split('\n');
  return arr.map(item => +item) 
}

function getStats() {
  let arr = []
for (let i = 0; i < getPadawanNames().length; i += 1) {
  arr.push([getPadawanNames()[i], getLightsaberScores()[i]])
}
return arr;
}

function writeStats() {
  fs.writeFileSync('./data/stats.txt', getStats().map(item => item.join(' ')).join('\n'))

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
