

const fs = require('fs');


function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').splice(0, 4);
  return padawans;
}


function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map((el) => Number(el));
  return scores;
}
let array = [];
function getStats() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map((el) => Number(el));
  for (let i = 0; i < 4; i++) {
    let arr = [];
    arr.push(padawans[i], scores[i]);
    array.push(arr)
  }
  return array;
}

function writeStats() {

}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
}
