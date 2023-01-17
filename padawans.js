const fs = require('fs');

function getPadawanNames(){
let names = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n')
return names
//console.log(names)
}

function getLightsaberScores (){
  let anotherOne = fs.readFileSync('./data/scores.txt', 'utf8').split('\n').map((el) => Number(el))
  return anotherOne
}

function getStats (){
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  const arr = [];
  for(let i = 0; i < names.length; i += 1){
  const arrFinal = [];
  arrFinal.push(names[i], scores[i])
  arr.push(arrFinal)
  }
 return arr
}
console.log(getStats());


function writeStats(stats){
 const result = stats.map((el) => el.join(' ')).join('\n');
 fs.writeFileSync('data/stats.txt', result)
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
}