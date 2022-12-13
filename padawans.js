const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf8').trim().split('\n');

function getPadawanNames() {
  return padawans;
}

const saberScoreArr = fs.readFileSync('./data/scores.txt', 'utf8').split('\n').map((el) => +el);

function getLightsaberScores() {
  return saberScoreArr;
}

function getStats() {
  const cardArr1 = [];
  const cardArr2 = [];
  const cardArr3 = [];
  const cardArr4 = [];

  for (let i = 0; i < padawans.length; i += 1) {
    if (i === 0) {
      cardArr1.push(padawans[i]);
      cardArr1.push(saberScoreArr[i]);
    }
    if (i === 1) {
      cardArr2.push(padawans[i]);
      cardArr2.push(saberScoreArr[i]);
    }
    if (i === 2) {
      cardArr3.push(padawans[i]);
      cardArr3.push(saberScoreArr[i]);
    }
    if (i === 3) {
      cardArr4.push(padawans[i]);
      cardArr4.push(saberScoreArr[i]);
    }
  }
  return [cardArr1, cardArr2, cardArr3, cardArr4];
}

// const saberScoreStrArr = saberScoreArr.map((el) => el.toString());
// function strStats() {

// }


function writeStats() {
  fs.writeFileSync('./data/stats.txt', )
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
