const fs = require('fs')

let padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n')
let scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n')

const getPadawanNames = () => {
  let padawansList = [];

  for (let i = 0; i < padawans.length - 1; i++) {
    padawansList.push(padawans[i])
  }

  return padawansList
}


const getLightsaberScores = () => {
  let scoresList = [];

  for (let i = 0; i < scores.length; i++) {
    scoresList.push(Number(scores[i]))
  }

  return scoresList
}

const getStats = () => {
  let stats = [];

  for (let i = 0; i < padawans.length - 1; i++) {
    stats.push([padawans[i], Number(scores[i])])
  }

  return stats
}

let result = getStats();

const writeStats = () => {
  let str = ''
  str += result.join(' \n');
    fs.writeFileSync(`./data/stats.text`, str);
  }

writeStats()

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

