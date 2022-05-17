const fs = require('fs');
const { get } = require('http');

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

let a = getPadawanNames()
let b = getLightsaberScores()
function getStats() {
  let arr = []
  for (let i = 0; i < a.length; i += 1) {
    arr.push([a[i], b[i]])
  }
  return arr
}
console.log(getStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
