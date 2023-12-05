const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const fileName = './data/padawans.txt';
const padawans = fs.readFileSync(fileName, 'utf-8');

const pathScores = './data/scores.txt';
const lightsaberScores = fs.readFileSync(pathScores, 'utf-8');

function getPadawanNames() {
  return padawans.trim().split('\n');
}
function getLightsaberScores() {
  const arrToNumber = lightsaberScores.trim().split('\n');
  return arrToNumber.map((item) => Number(item));
}

const namePadawans = getPadawanNames();
const saberScore = getLightsaberScores();

function getStats() {
  let semiArr = [];
  const newArr = [];
  for (let i = 0; i < getPadawanNames().length; i += 1) {
    semiArr.push(namePadawans[i], saberScore[i]);
    newArr.push(semiArr);
    semiArr = [];
  }
  return newArr;
}

function writeStats() {
  for (let i = 0; i < namePadawans.length; i += 1) {
    const result = `${namePadawans[i]} ${saberScore[i]}`;
    if (i === 3) {
      fs.appendFileSync('./data/stats.txt', `${result}`);
    } else {
      fs.appendFileSync('./data/stats.txt', `${result}\n`);
    }
  }
}
