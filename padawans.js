const fs = require('fs')

const getPadawanNames = () => fs.readFileSync('./data/padawans.txt', 'utf8').split('\n').slice(0, 4);

const getLightsaberScores = () => fs.readFileSync('./data/scores.txt', 'utf8').split('\n').map(item => +item)

const getStats = () => {}

const writeStats = () => {}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};