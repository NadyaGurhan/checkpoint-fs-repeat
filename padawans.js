const fs = require('fs')
const path = require('path')
const {EOL} = require('os')
const padawans = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf-8')
const scores = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf-8')

const padawansArr=  padawans.split('\r\n')
const scoresArr =  scores.split('\r\n')
const filename = 'stats.txt'

function getPadawanNames () {
return padawansArr.filter(Boolean)
}

function getLightsaberScores () {
  let newArr = []
  for (let i= 0;i<scoresArr.length; i+=1)  {
    newArr.push(+scoresArr[i])
  }
  return newArr
}
const boolPadavan = padawansArr.filter(Boolean)
function getStats () {
  let mainArr = []
  let newArr = []
 
  for (let i = 0; i<boolPadavan.length; i+=1) {
    newArr = [boolPadavan[i], +scoresArr[i]]
    mainArr.push(newArr)
  }
  return mainArr
}

function writeStats () {
  let newStats = ''
  const getStatsString = getStats()
  for (let i=0; i<getStatsString.length; i+=1) {
    newStats += `${boolPadavan[i]} ${scoresArr[i]}\n`
  }
fs.writeFileSync(path.join(__dirname,'data',filename), newStats)

}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
console.log(writeStats())