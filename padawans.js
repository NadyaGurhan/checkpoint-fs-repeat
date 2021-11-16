const fs = require('fs');

function getPadawanNames() {
  const padaw = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').splice(0,4);
return padaw;
}

function getLightsaberScores() {
  const crore = fs
readFileSync('./data/scores.txt', 'utf-8')
.split('\n');
return score;
}

function getStats() {
  const padaw = fs
readFileSync('./data/padawans.txt', 'utf-8')
.split('\n');
  let array = [];
  for (let i = 0; i < 4; i++){
    let arr =[];
    arr.push(padaw[i]).push(score[i]);
  array.push(arr);
  }
  return array;
}

function writeStats() {
  let str = array.join('/n');
  return fs
  .writeFileSync('./data/stats.txt', str);

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
