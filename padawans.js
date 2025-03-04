const fs = require('fs')
const  { EOL } = require('os')

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8')
const scores = fs.readFileSync('./data/scores.txt', 'utf-8')


function getPadawanNames(){
  return padawans.trim().split(EOL)
}

function getLightsaberScores(){
  return scores.trim().split(EOL).map((elment) => Number(elment))
}

function getStats(){
  let padawansMas = getPadawanNames()
  let scoresMas = getLightsaberScores()
  let result = []
  for(let i = 0; i < padawansMas.length; i++ ){
    let obj = []
    obj.push(padawansMas[i])
    obj.push(scoresMas[i])
    result.push(obj)
  }

  return result
}

function writeStats(){
  let padawansMas = getPadawanNames()
  let scoresMas = getLightsaberScores()
  let result = `${padawansMas[0]} ${scoresMas[0]}\n`
  for(let i = 1; i < padawansMas.length; i++ ){
    let obj = `${padawansMas[i]} ${scoresMas[i]}\n`
    result += obj
  }
  result = result.slice(0, -1)
  fs.writeFileSync('data/stats.txt', result)
}

console.log(writeStats())

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
