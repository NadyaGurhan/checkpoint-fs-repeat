const { isUtf8 } = require('buffer');
const fs = require('fs')

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
const path1 = fs.readFileSync('./data/padawans.txt', 'utf8')
const path = fs.readFileSync('./data/scores.txt', 'utf8')

function getPadawanNames(){
 const padavanNames= path1.split('\n')
 return padavanNames
}
// console.log(getPadawanNames());

function  getLightsaberScores(){
  const socer = path.split('\n').map((number) => +number)
  return socer
}
// console.log(getLightsaberScores());

function  getStats(){
 const getPadawanNames = getPadawanNames()
 const getLightsaberScores =  getLightsaberScores()
 const start = []
 let star = []
for (let i = 0; i < getPadawanNames.length; i++) {
  star.push(getPadawanNames[i],getLightsaberScores[i])
  
}
}
// console.log(getStats());

function  writeStats(){


}
