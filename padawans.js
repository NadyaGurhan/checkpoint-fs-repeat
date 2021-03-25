const fs = require('fs');

function getPadawanNames(){
  let list = fs.readFileSync('./data/padawans.txt','utf-8').split("\n")
  return list.filter(el => el.length != 0)
}

function getLightsaberScores(){
  let list = fs.readFileSync('./data/scores.txt','utf-8').split("\n")
  list.filter(el => el.length != 0)
  return list.map(el=>Number(el))
}
function getStats(){
let names=getPadawanNames()
let scores=getLightsaberScores()
arr=[]
for (let i = 0; i < names.length; i++) {
  arr.push([]);
  arr[i].push(names[i], scores[i]);
}

return arr
}
function writeStats(){
  let string=people.map(el=>`${el}\n`).join('')
 
  fs.writeFileSync('.data/stats.txt',string,{flag:"a"})
}

console.log(getPadawanNames('./data/padawans.txt'));


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
