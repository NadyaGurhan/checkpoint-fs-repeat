const fs = require('fs');

function getPadawanNames() {
  let padawansTxt = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  padawansTxt = padawansTxt.filter((word) => word !== '');
  return padawansTxt;
}

function getLightsaberScores() {
  let scoreTxt = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  scoreTxt = scoreTxt.filter((word) => word !== '');
  scoreTxt = scoreTxt.map((word) => +word);
  return scoreTxt;
}

function getStats() {
  const arrScore = getLightsaberScores();
  const arrPadawans = getPadawanNames();
  const res = [];
  for (let i = 0; i < arrPadawans.length; i += 1) {
    res[i] = [];
    for (let j = 0; j < 1; j += 1) {
      res[i][0] = arrPadawans[i];
      res[i][1] = arrScore[i];
    }
  }
  return res;
}

function writeStats() {
  const res = getStats();
  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < 1; j++) {
      res[i][j] = String(res[i][j]);
      fs.appendFileSync('./data/stats.txt', `${res[i]}\n`);
    }
  }
}
getPadawanNames();
getLightsaberScores();
getStats();
writeStats();
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
