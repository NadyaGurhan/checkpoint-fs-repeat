const fs = require('fs')

const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');

function getPadawanNames() {
  padawans.pop();
  return padawans;
}

function getLightsaberScores() {
  const result = [];
  scores.forEach((string) => {
    result.push(Number(string))
  });
  return result;
}

function getStats() {
  const numScores = [];
  scores.forEach((string) => {
    numScores.push(Number(string))
  });

  padawans.pop();
  for (let i = 0; i < padawans.length; i++) {
    padawans[i] = padawans[i].split(', ')
  }

  for (let i = 0; i < padawans.length; i++) {
    padawans[i].push(numScores[i])
  }

  return padawans;
}
// console.log(getStats())

// function writeStats() {
  
// }

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
//   writeStats,
};