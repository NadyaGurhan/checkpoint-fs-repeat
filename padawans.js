const fs = require('fs')

const { EOL } = require('os');

const dataPadawans = fs.readFileSync('./data/padawans.txt', 'utf8')
const arrayPadawans = dataPadawans.split(EOL)

const dataScores = fs.readFileSync('./data/scores.txt', 'utf8')
const arrayScores = dataScores.split(EOL).map(el => +el)


function getPadawanNames(){
  return arrayPadawans.filter((el)=> el !== '')
}

function getLightsaberScores(){
  return arrayScores
}

function getStats(){
  // const arrStats = []
  // arrayScores.forEach((el,index)=>{
  //   arrStats.push([...el, arrayPadawans[index]])
  // })
  // return arrStats
}

console.log(getStats());



function writeStats(){}








module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
