const fs = require('fs');

function getPadawanNames() {
return fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').splice(0, 4)
}
// console.log(getPadawanNames)
 
function getLightsaberScores() {
return fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map(Number)
}

// function getStats() {

// }

// function writeStats() {

 //} 
 module.exports = {
  getPadawanNames,
  getLightsaberScores,
//  getStats,
//  writeStats,
  };
