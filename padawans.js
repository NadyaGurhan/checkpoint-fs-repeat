const fs = require('fs');

function getPadawanNames() {
  const arr = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  arr.splice(arr.length - 1);
  return arr;
}

function getLightsaberScores() {
  const arr = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  return arr.map((el) => +el);
}

function getStats() {
  const arrPad = getPadawanNames();
  const arrScore = getLightsaberScores();
  const arr = [];

  for (let i = 0; i < arrPad.length; i += 1) {
    arr.push([arrPad[i], arrScore[i]]);
  }
  return arr;
}

function writeStats(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (i < arr.length - 1) {
      fs.appendFileSync('./data/stats.txt', `${arr[i].join(' ')}\n`);
    } else {
      fs.appendFileSync('./data/stats.txt', `${arr[i].join(' ')}`);
    }
  }
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
