const fs = require('fs');

const padawans = fs.readFileSync('data/padawans.txt');
const scores = fs.readFileSync('data/scores.txt');

const newPadawans = padawans.toString().split('/n');
const newScores = scores.toString().split('/n');

function getPadawanNames() {
  const newArr = [];
  for (let i = 0; i < newPadawans.length; i += 1) {
    const element = newPadawans[i];
    elementArr = element.split(',');
    newArr.push(element);
  }
  return newArr;
}

function getLightsaberScores() {
  const newArr = [];
  for (let i = 0; i < newScores.length; i += 1) {
    const element = newScores[i];
    elementArr = element.split(',');
    newArr.push(element);
  }
  return newArr;
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
