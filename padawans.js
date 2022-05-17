const fs = require('fs')

function getPadawanNames() {
  let read = fs.readFileSync('./data/padawans.txt', 'utf-8')
  let save = read.split('\n')
  save.splice(-1, 1)
  console.log(save);
  return save
}
console.log(getPadawanNames());


function getLightsaberScores() {
  let read = fs.readFileSync('./data/scores.txt', 'utf-8')
  let save = read.split('\n')
  let chislo = save.map(el => +el)
  return chislo

}
console.log(getLightsaberScores());
function getStats() {
  let read = fs.readFileSync('./data/padawans.txt', 'utf-8')
  let score = fs.readFileSync('./data/score.txt', 'utf-8')
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
