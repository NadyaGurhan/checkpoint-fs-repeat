const fs = require('fs')
const Padawans = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf-8');
const Scores = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf-8');


function getPadawanNames() {
const padawansArr = Padawans.trim().split('\n');
return padawanArr;
}

function getLightsaberScores() {
  const scoresarr = Scores.trim().split('\n');
  const arr = []
  for (let i=1, i<arr.length, i++){
    arr.push(Number(arr[i]))
  } 
 return arr
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
