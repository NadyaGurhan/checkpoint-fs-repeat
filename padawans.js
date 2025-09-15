const fs = require('fs');
const { EOL } = require('os');

function getPadawanNames() {
  const arrNames = fs.readFileSync('./data/padawans.txt', 'utf8').split(EOL);
  return arrNames;
}

function getLightsaberScores() {
  const arrScores = fs.readFileSync('./data/scores.txt', 'utf8').split(EOL);
  const newArr = [];
  for (let i = 0; i < arrScores.length; i++) {
    const num = Number(arrScores[i]);
    newArr.push(num);
  }
  return newArr;
}

function getStats() {
  const arrNames = fs.readFileSync('./data/padawans.txt', 'utf8').split(EOL);
  const arrScores = fs.readFileSync('./data/scores.txt', 'utf8').split(EOL);
  const newArr = [];
  for (let i = 0; i < arrNames.length; i++) {
    const name = arrNames[i];
    const num = Number(arrScores[i]);
    newArr.push([name, num]);
  }
  return newArr;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
