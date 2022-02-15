function getPadawanNames() {
return padawans.split('\n').filter(a=>a !='')
}
function getLightsaberScores() {
return scores.split('\n').map(a=>+a)
}
function getStats() {

}
function writeStats() {

}
const fs = require('fs')
const { join } = require('path')
const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8')
const scores = fs.readFileSync('./data/scores.txt', 'utf-8')


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
