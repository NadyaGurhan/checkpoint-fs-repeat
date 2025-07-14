const fs = require('fs')

const { EOL } = require('os');

const dataPadawans = fs.readFileSync('./data/padawans.txt', 'utf8')
const arrayPadawans = dataPadawans.split(EOL).filter((el)=> el !== '')

const dataScores = fs.readFileSync('./data/scores.txt', 'utf8')
const arrayScores = dataScores.split(EOL).map(el => +el)


function getPadawanNames(){
  return arrayPadawans
}

function getLightsaberScores(){
  return arrayScores
}

function getStats(){
  const arrStats = []
  arrayPadawans.forEach((el,index)=>{
    arrStats.push([el, arrayScores[index]])
  })
  return arrStats
}

function writeStats(){
  const newStats =  getStats().map(el => el.join(' '))
  fs.writeFileSync('./data/stats.txt', newStats.join(EOL) + EOL)
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
