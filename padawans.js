const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
const padawansList = padawans.split('\n');

const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
const scoresList = scores.split('\n');

const removeEmptyElem = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === '') {
      arr.splice(i, 1);
    }
  }
};

const getPadawanNames = () => {
  removeEmptyElem(padawansList);
  // for (let i = 0; i < padawansList.length; i += 1) {
  //   if (padawansList[i] === '') {
  //     padawansList.splice(i, 1);
  //   }
  // }

  return padawansList;
};

const getLightsaberScores = () => {
  for (let i = 0; i < scoresList.length; i += 1) {
    scoresList[i] = +scoresList[i];
  }
  return scoresList;
};

const getStats = () => {};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};

console.log(getStats());
