const fs = require('fs');

const padawans = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf-8').split('\n');
const scores = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf-8').split('\n');

function getPadawanNames() {
  return padawans;
}

function getLightsaberScores() {
  return scores;
}

function getStats() {
  const newArr = [];
  for (let i = 0; i < padawans.length; i += 1) {
    newArr.push([`${padawans[i]}, ${scores[i]}`]);
  }

  for (let i = 0; i < newArr.length; i += 1) {
    fs.appendFileSync(`${__dirname}/data/stats.txt`, `${newArr[i]}\n`);
  }

  return newArr;
}

function writeStats(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1) {
      newArr.push(arr[i][j].replace(',', ''));
    }
  }
  for (let i = 0; i < arr.length; i += 1) {
    fs.writeFileSync(`${__dirname}/data/stats.txt`, `${newArr}\n`);
  }
  return newArr;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
