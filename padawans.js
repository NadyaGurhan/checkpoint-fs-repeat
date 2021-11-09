const fs = require('fs');
const names = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n')
const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map(Number)

const getPadawanNames = () => names

const getLightsaberScores = () => scores

const getStats = () => names.map((el, i) => [el, scores[i]])

const writeStats = () => {
  for (let i = 0; i < names.length; i++) {
    if (i === names.length - 1) {
      return fs.appendFileSync('./data/stats.txt', `${names[i]} ${scores[i]}`)
    }
    fs.appendFileSync('./data/stats.txt', `${names[i]} ${scores[i]}\n`)
  }
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
