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
  let array = [];
  const padawanses = getPadawanNames();
const scores = getLightsaberScores();
  
  for (let i = 0; i < 4; i++){
    let arr =[];
    arr.push(padawanses[i], scores[i]);
  array.push(arr);
  }
  return array;
}

function writeStats() {
  const stats = getStats();
  const filePath = './data/stats.txt';
  let str = stats.join('\n').replace(/,/g, ' ');
  return fs.writeFileSync(filePath, str);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
