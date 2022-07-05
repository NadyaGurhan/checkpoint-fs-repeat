const fs = require('fs')

const getPadawanNames = () => {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8')
  const padawansArr = padawans.split('\n');
  return padawansArr
}

const getLightsaberScores = () => {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8')
  const scoresArr = scores.split('\n')
  return scoresArr
}

// console.log(getLightsaberScores());

const getStats = () => {

}

const writeStats = () => {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
