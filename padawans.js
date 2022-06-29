const fs = require('fs');

function getPadawanNames(){
  let arr = fs.readFileSync('./data/padawans.txt', 'utf-8');
 return arr.split('\n').filter(elem => elem !== '')
}

function getLightsaberScores() {
  let arr = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n')
  let arrScores = [];
  for (let i = 0; i < arr.length; i++) {
    arrScores.push(Number(arr[i]));
  }
  return arrScores;
}

function getStats(){
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  let stats = [];
for (let i = 0; i < names.length; i++) {
  stats.push([names[i], scores[i]]);
  }
  return stats;
}

function writeStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  let result = '';
  for (let i = 0; i < names.length; i++) {
    result += names[i] + ' ' + scores[i] + '\n';
    }
    let final = result.slice(0, (result.length - 1))
  return fs.writeFileSync('./data/stats.txt', final);
  }



module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};