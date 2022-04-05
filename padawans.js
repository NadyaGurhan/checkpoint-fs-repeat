const fs = require('fs')
const puthPadawans = './data/padawans.txt'
const padawans = fs.readFileSync(puthPadawans,"utf-8").split('\n').slice(0,-1)
const puthScores = './data/scores.txt'
const scores = fs.readFileSync(puthScores,"utf-8").split('\n').map(Number)

const getPadawanNames = () => padawans;

const getLightsaberScores = () => scores;


const getStats = () => {
  const statsArray = [];
  for (let i = 0; i < padawans.length; i += 1) {
    statsArray.push([padawans[i], scores[i]]);
  }
  return statsArray;
}
const stats = getStats()

const writeStats = () => {
  const regexp = /\,/g;
  const statsText = stats.join('\n').replace(regexp, ' ');
  fs.writeFileSync('./data/stats.txt',statsText)
};
writeStats()

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
