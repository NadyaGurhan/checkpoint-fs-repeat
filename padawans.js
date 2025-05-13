const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8');

const newPadawans = padawans.split('\n');
const newScores = scores.split('\n');

function getPadawanNames() {
  return newPadawans;
}

function getLightsaberScores() {
  const numbersScores = [];
  for (let i = 0; i < newScores.length; i++) {
    numbersScores.push(+newScores[i])
  }
  return numbersScores;
}

// function getStats() {
//   const newArr = [];

//   for (let i = 0; i < newPadawans.length; i++) {

//   }
//   console.log(newArr);
// }

// getStats();

// function writeStats() {

// }


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
