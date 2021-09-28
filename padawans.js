const fs = require('fs');

const padawanList = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n');

padawanList.pop();

// console.log(padawanList);

function getPadawanNames() {
  return padawanList;
}

const scoresList = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');

// console.log(scoresList);

function getLightsaberScores() {
  const scoresArr = [];
  for (let i = 0; i < scoresList.length; i++) {
    scoresArr.push(Number(scoresList[i]));
  }
  return scoresArr;
}

function getStats() {
  const statsArr = [];
  for (let i = 0; i < padawanList.length; i += 1) {
    statsArr.push([padawanList[i], Number(scoresList[i])]);
  }
  return statsArr;
}

function writeStats() {
  const arr = [];
  for (let i = 0; i < padawanList.length; i += 1) {
    arr.push(padawanList[i] + ' ' + scoresList[i]);
  }
  const arr1 = arr.join('\n');
  fs.writeFileSync('./data/stats.txt', `${arr1}`);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
