const fs = require('fs');
function getPadawanNames (){
const res = fs.readFileSync("data/padawans.txt", "utf8").split('\n').slice(0,-1)
return res
}

function getLightsaberScores (){
  let newArr = []
  const res1 = fs.readFileSync("data/scores.txt", "utf8").split('\n')
for(let i =0; i < res1.length; i++){
newArr.push(res1[i] * 1)
}
  return newArr
}

function getStats (){
  newArr =[]
  for(let i = 0; i < getPadawanNames().length; i++){
newArr[i] = [getPadawanNames()[i], getLightsaberScores()[i]]
  }
  return newArr
}

function writeStats (stats){
  stats = getStats().join('\n').split(',').join(' ')
  return fs.writeFileSync("data/stats.txt", stats); 

}

writeStats ()
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
