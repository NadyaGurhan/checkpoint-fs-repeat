const fs = require('fs');
let array = [];


function getPadawanNames() {
  const padaw = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').splice(0,4);
return padaw;
}

function getLightsaberScores() {
  const score = fs
  .readFileSync('./data/scores.txt', 'utf-8')
.split('\n')
.map((el)=> Number(el));
return score;
}

function getStats() {
  const score = fs
  .readFileSync('./data/scores.txt', 'utf-8')
.split('\n')
.map((el)=> Number(el));
  padaw = fs
.readFileSync('./data/padawans.txt', 'utf-8')
.split('\n');
  
  for (let i = 0; i < 4; i++){
    let arr =[];
    arr.push(padaw[i], score[i]);
  array.push(arr);
  }
  return array;
}

function writeStats() {
  let str = array.join('\n');
  return fs
  .writeFileSync('./data/stats.txt', str);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
