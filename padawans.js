const fs = require('fs')
const { get } = require('http')

function getPadawanNames(){
let padawans = fs.readFileSync('data/padawans.txt','utf8')
return padawans.split('\n').slice(0,-1)
}

function getLightsaberScores(){
let scores = fs.readFileSync('data/scores.txt','utf8')
return scores.split('\n').map(el=>Number(el))
}

function getStats(){
let padawansScore = getPadawanNames().map(el=>Array(el))
let scores = getLightsaberScores()
for(let i = 0; i<padawansScore.length; i++){
  padawansScore[i].push(scores[i])
}
return padawansScore
}


function writeStats(){
let saveData = getStats().map(el=>el.join(' ')).join('\n')
console.log(saveData)
fs.writeFileSync(`data/stats.txt`,`${saveData}`)
}
console.log(writeStats())

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
