const fs = require('fs');
const crew = fs.readFileSync('./data/padawans.txt', 'Utf-8');
const arr = fs.readFileSync('./data/scores.txt', 'utf-8');
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
function getPadawanNames() {
  let sor = crew.split('\n')
  let s = sor.pop()
  return sor
}
function getLightsaberScores() {
  let r = []
  let cre = arr.split('\n')
  console.log(cre);
  for(let i = 0; i < cre.length;i++){
r.push(Number(cre[i]))
  }
  return r
}
function getStats() {}
function writeStats() {}
