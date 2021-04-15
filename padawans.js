const fs = require('fs');

const getPadawanNames = () =>{
  let data = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n')
  return data
}
const getLightsaberScores = () =>{
  let data = fs.readFileSync('./data/scores.txt', 'utf-8').trim().split('\n').map(el => +el)
  return data
}
const getStats = () =>{
  let tableOfScores =  [];
  for (let i =0; i < getPadawanNames().length; i++) {
    tableOfScores.push([getPadawanNames()[i], getLightsaberScores()[i]])
  }
  return tableOfScores
}
const writeStats = (arr) =>{
  let data = fs.writeFileSync(`data/stats.txt`, arr.join(''))
  return data
}
console.log(getPadawanNames()); 
console.log(getLightsaberScores()); 
console.log(getStats()); 
writeStats(getStats())


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
