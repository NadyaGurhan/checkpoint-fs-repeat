const fs = require('fs');

const padavan = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');

function getPadawanNames() {
  const padavanName = padavan.pop();
  return padavanName;
}

const scores = fs.readFileSync('./data/scores.txt').split('\n');

function getLightsaberScores() {
  return scores.map((value) => +value);
}

function getStats() {
  cconst arr = [];
  for (let i=0; i<padavan.length; i++); {
  let arr1 = [padavan[i], scores[i]];
  arr1.push(arr)
  }
return arr1
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
