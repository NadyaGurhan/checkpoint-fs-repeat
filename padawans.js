const fs = require('fs');

// const padawansTxt = fs.readFileSync('data/padawans.txt', 'utf-8');
// console.log(padawansTxt);
const padawansTxt = fs.readFileSync('data/padawans.txt', 'utf-8');
const scoreTxt = fs.readFileSync('data/scores.txt', 'utf-8');

function getPadawanNames() {

  return padawansTxt.split('\n').slice(0, -1);

}

function getLightsaberScores() {

  return scoreTxt.split('\n').map((el) => +el);
}

function getStats() {

  const arrPadawans = getPadawanNames();
  const arrScores = getLightsaberScores();
  arrPadawans.map((el, index) => el.split().push(arrScores[index]));
  let res = ''
  const writeTxt = arrPadawans.forEach((el) => res += `${el[0]} ${el[1]}\n`)

  fs.writeFileSync('data/stats.txt', res)

  return arrPadawans





}
function writeStats() {

}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
