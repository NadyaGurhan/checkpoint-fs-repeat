const fs = require('fs')
const {EOL} = require('os')

function getPadawanNames() {
  const data = fs.readFileSync('./data/padawans.txt', 'utf-8')
  return data.trim().split(EOL)
}
function getLightsaberScores() {
const data2 = fs.readFileSync('./data/scores.txt', 'utf-8')
const end = data2.trim().split(EOL)
const end2 = end.map((el) => Number(el))
return end2
}
function  getStats() {
const name = getPadawanNames();
const score = getLightsaberScores();
console.log(name)
console.log(score)
const end = name.map((el, index) => [name[index] + ' ' + [score[index]]] + EOL)

return end;
}
function writeStats() {
const data = getStats().join(EOL)
const data1 = fs.writeFileSync('./data/stats.txt', getStats().join(''), 'utf-8')
const end = data1
return end

}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
