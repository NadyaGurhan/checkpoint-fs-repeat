const fs = require('fs')

function getPadawanNames() {
  const name = fs.readFileSync('data/padawans.txt', 'utf-8').split('\r\n').filter(Boolean)
  return name

}
console.log(getPadawanNames());


function getLightsaberScores() {
  const count = fs.readFileSync('data/scores.txt', 'utf-8').split('\r\n').map(Number)
  return count 
}
console.log(getLightsaberScores());

function getStats() {
const count = fs.readFileSync()


}

function writeStats() {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
