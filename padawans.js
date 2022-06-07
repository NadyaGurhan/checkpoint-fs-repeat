const fs = require('fs');

const getPadawanNames = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n');

const getPadawanScoresString = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');
let getPadawanScores = [];
for (let i = 0; i < getPadawanScoresString.length; i++) {
  getPadawanScores.push(+getPadawanScoresString[i])
};



let getStats = [];
for (let i = 0; i < getPadawanScores.length; i++) {
  getStats.push([getPadawanNames[i], getPadawanScores[i]]);
}
console.log(getStats);


module.exports = {
  getPadawanNames,
  getPadawanScores,
  getStats,
 // writeStats,
};

