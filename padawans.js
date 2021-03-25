const fs = require('fs')
// const { get } = require('http')
const fileName = 'data/padawans.txt';
const fileScore = 'data/scores.txt';

function getPadawanNames() {
  const data = fs.readFileSync(fileName, 'utf-8');
  const arrDataName = data.split('\n').slice(0,-1);
  return arrDataName;
}

function getLightsaberScores(){
  const data = fs.readFileSync(fileScore, 'utf-8');
  const arrDataScore = data.split('\n').map((score) => Number(score));
  return arrDataScore;
}

function getStats() {

for ( let i = 0; i < arrDataName; i++ ) {
  
}

}


// console.log(getPadawanNames())
// console.log(getLightsaberScores())

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
