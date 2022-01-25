const fs = require('fs')

function getPadawanNames(){
const name = fs.readFileSync('./data/padawans.txt', 'utf-8');
 return arrName.push(name); 
}

function getLightsaberScores() {
  const score = fs.readFileSync('./data/scores.txt','utf-8');
 return score;
}
getPadawanNames()
// getLightsaberScores()

function getStats() {
  let arrName = [];
  let arrScore = [];
  let name = arrName.push(getPadawanNames());
  let score = arrScore.push(getLightsaberScores());
 for(let i = 0; i < getPadawanNames; i++){
  name[i] = name[i]+score[i];
 }
  return name;
  }
getStats()

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
