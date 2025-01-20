const fs = require('fs')
const { EOL } = require('os')



function getPadawanNames(){
const getPadawanNames2 = fs.readFileSync('./data/padawans.txt', 'utf-8');
let names = getPadawanNames2.split(EOL)
names.pop()
return names
}



function getLightsaberScores(){
  const getLightsaberScores2 = fs.readFileSync('./data/scores.txt', 'utf-8');
  let names = getLightsaberScores2.split(EOL).map(el => Number(el))
  return names
}

function getStats(){
let names = getPadawanNames()

let scores = getLightsaberScores()
let newarr = []
for (let i = 0; i < names.length; i++){
  newarr[i] = [names[i] , scores[i]]
  // newarr.push(names, scores)
}
return newarr
}

function writeStats(){
  const newFile = fs.writeFileSync('./data/stats.txt', getStats().map(el => (el + '\n').replace(',', ' ')).join('').slice(0 , -1))
  return newFile
}








module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};