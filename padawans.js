const fs = require('fs')

const getPadawanNames = () => {
  return fs.readFileSync('./data/padawans.txt','utf-8').split('\n')
}

const getLightsaberScores = () => {
  return fs.readFileSync('./data/scores.txt','utf-8').split('\n').map(a=>+a)
}

const getStats = () => {
  let arr = []
  for (let i=0;i<4;i++){
let padawan = []
padawan.push(getPadawanNames()[i],getLightsaberScores()[i])
arr.push(padawan)
  }
  return arr
}

const writeStats = (stats) => {
  fs.appendFileSync(`./data/stats.txt`,`${stats.map(a=>a.join(' ')).join('\n')}`,'utf-8')
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
