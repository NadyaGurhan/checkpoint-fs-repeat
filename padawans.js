const fs = require('fs')

let getPadawanNames = () => fs.readFileSync('./data/padawans.txt', 'utf8').split('\n')
let getLightsaberScores = () => fs.readFileSync('./data/scores.txt', 'utf8').split('\n').map(el=> +el)
let getStats = () => fs.readFileSync('./data/stats.txt').split('\n').map(el=> el.split('\n')
let writeStats = () => {}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
