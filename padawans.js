const fs = require('fs')


function getPadawanNames() {
let padawansList = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n').slice(0, -1)
return padawansList;
}

function getLightsaberScores() {
let lightsaberScoresList = fs.readFileSync('./data/scores.txt', 'utf8').split('\n')
let lightsaberScoresListNum = lightsaberScoresList.map((el)=>(Number(el)))
  return lightsaberScoresListNum;
  }

function getStats() {
let statList =[]
let padawansList = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n').slice(0, -1);
let lightsaberScoresList = fs.readFileSync('./data/scores.txt', 'utf8').split('\n')
let lightsaberScoresListNum = lightsaberScoresList.map((el)=>(Number(el)))
let stat1 
for(let i=0;i<4;i++){
  stat1 = padawansList[i]+ ', ' +(lightsaberScoresListNum[i])
  statList.push(stat1)
}
return statList
}
console.log(getStats())

function writeStats() {
         
}
        

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
