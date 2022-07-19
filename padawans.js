const fs = require('fs');

const filePadawan = fs.readFileSync('./data/padawans.txt', 'utf-8');
const scorePadawan = fs.readFileSync('./data/scores.txt', 'utf-8');

function getPadawanNames() {
  const padawans = filePadawan.split('\n').filter((item) => item !== '');
  return padawans;
}

function getLightsaberScores() {
  const score = scorePadawan.split('\n').filter((item) => item !== '').map((item) => +item);
  return score;
}

function getStats() {
  const padawans = filePadawan.split('\n').filter((item) => item !== '');
  const score = scorePadawan.split('\n').filter((item) => item !== '').map((item) => +item);
  const arrStatus = [];
  for (let i = 0; i < padawans.length; i += 1) {
    arrStatus.push([padawans[i], score[i]]);
  }
  return arrStatus;
}
function writeStats() {
  // fs.appendFileSync(dataStatus, getStats);
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
