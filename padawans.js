
const fs = require('fs');
let padavanName = fs.readFileSync('./data/padawans.txt', 'utf-8');
let padavanScores = fs.readFileSync('./data/scores.txt', 'utf-8');


function getPadawanNames() {
  return padavanName.split('\n').slice(0, -1);
}

function getLightsaberScores() {
  return padavanScores.split('\n');
}


let padavanNameArr = getPadawanNames();
let padavanScoresArr = getLightsaberScores();

function getStats() {
  let stats = [];
  for(let i = 0; i < padavanNameArr.length; i++) {
    let statsOne = [];
    statsOne[0] = `${padavanNameArr[i]}, ${padavanScoresArr[i]}`;
    stats.push(statsOne);
  }
  
  return stats;
}





module.exports = {
  getPadawanNames,
  getLightsaberScores,
 //getStats,
  //writeStats,
};
