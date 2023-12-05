const { log } = require('console');
const fs = require('fs')
const path = require('path')
const dirNamePadawans = path.join(__dirname, './data/padawans.txt')
const dirNameScores = path.join(__dirname, './data/scores.txt')

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames(){
  const padawans = fs.readFileSync(dirNamePadawans, "utf-8").trim()
  const result = padawans.split('\r\n')
  return result
}

function getLightsaberScores(){
  const scores = fs.readFileSync(dirNameScores, 'utf-8')
  const resultStr = scores.split('\r\n')
  const resultNum = resultStr.map((i) =>  i = +i )
  return resultNum 
}

function getStats(){
const padawansNew = getPadawanNames()
const scoresNew = getLightsaberScores()
const results = []
  for (let i = 0; i < padawansNew.length; i++) {
    let str = []
    str.push(padawansNew[i], scoresNew[i]) 
    results.push(str)
  }
return results
}

function writeStats(){
  const newStats = getStats()
  const result = newStats.map((el) => el = el.join(' '))
  const newResults = result.join('\n')
  fs.writeFileSync('./data/stats.txt', newResults);
  return result 

}
