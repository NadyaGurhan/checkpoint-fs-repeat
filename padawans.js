const fs = require('fs');
// let arrPadavans = padawans.split('');
// console.log(padawans);
const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');

function getPadawanNames() {
  padawans.pop();
  return padawans;
}

function getLightsaberScores() {
  for(let i = 0; i < scores.length; i++){
    scores[i] = parseFloat(scores[i]); 
  }
  return scores;
}
// console.log(getPadawanNames(scores));

function getStats() { 
  let arr1 = [];  
  for(let i = 0; i < padawans.length-1; i++){
        arr1.push(padawans[i], parseFloat(scores[i]));
    }
  console.log(arr1);
  return arr1;
}
getStats();
function writeStats() {
  
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
