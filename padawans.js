const fs = require('fs');

// Работа с padawans
const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
const arrayPadawans = padawans.split('\n');
const arrayPadawans2 = arrayPadawans.slice(0, -1);
// console.log(arrayPadawans2);

function getPadawanNames() {
  return arrayPadawans2;
}

// console.log(getPadawanNames());

// Работас scores

const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
const arrayScores = scores.split('\n');

// console.log(arrayScores);

function getLightsaberScores() {
  const arr = [];
  for (let i = 0; i < arrayScores.length; i++) {
    arr[i] = +arrayScores[i];
  }
  return arr;
}
// console.log(getLightsaberScores());

function getStats(){
  ler arr = [];
  let arrPad = getPadawanNames();
  let arrScor = getLightsaberScores(); 
  for(let i = 0; i<arrPad.length; i++){
    for(let j = 0; j<arrScore.length; j++){
      arr[i].push(arrPad[i])
      arr[i].push(arrScore[j])
    }
  }
return arr
}

console.log(getStats())

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
