const fs = require('fs');
const names = fs.readFileSync('./data/padawans.txt', 'utf-8');
const score = fs.readFileSync('./data/score.txt', 'utf-8');
//    ENOENT: no such file or directory, open './data/score.txt'

// 1 | const fs = require('fs');
// 2 | const names = fs.readFileSync('./data/padawans.txt', 'utf-8');
// > 3 | const score = fs.readFileSync('./data/score.txt', 'utf-8');
//   |                  ^
// 4 | const {
// 5 |   getPadawanNames,
// 6 |   getLightsaberScores,
//Такая же ошибка во втором задании 1го дня


function getPadawanNames() {
let arrNames = names.split('\n');
return arr;
}

function getLightsaberScores() {
 let arrScore = score.split('\n');
  return arrScore;
}

function getStats() {
  let arrNames = names.split('\n');
  let arrScore = score.split('\n');
  let arrSith = arrName.map((el) => el.split(', '))
  console.log(arrSith)
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
