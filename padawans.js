const fs = require('fs')
const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8')
const scores = fs.readFileSync('./data/scores.txt', 'utf-8')



function getPadawanNames() {
  return padawans.split('\n').slice(0,4)
}


function getLightsaberScores() {
  let sc = scores.split('\n')
  let arr = []
  for (let i = 0; i < sc.length; i++) {
    arr.push(+sc[i])
  }
  return arr
}


function getStats() {
  let pad = padawans.split('\n').slice(0,4)
  let scor = scores.split('\n')
  let arr = []
  for (let i = 0; i < pad.length; i++) {
    arr.push(`${pad[i]} ${scor[i]}`)
  }
  return arr;
}



function writeStats() {
  const stats = getStats()
  fs.writeFileSync('./data/stats.txt', stats.join('\n'), 'utf-8')
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

