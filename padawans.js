const fs = require('fs');

const dataPadawan = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n');
const dataPadawanStat = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');

function getPadawanNames() {
  const padawanName = [];
  for (let i = 0; i < dataPadawan.length; i += 1) {
    if (dataPadawan[i] !== '') {
      padawanName.push(dataPadawan[i]);
    }
  }
  return padawanName;
}

function getLightsaberScores() {
  const statSaber = [];
  for (let i = 0; i < dataPadawanStat.length; i += 1) {
    if (dataPadawanStat[i] !== '') {
      statSaber.push(+dataPadawanStat[i]);
    }
  }
  return statSaber;
}

function getStats() {
  const nameAndScore = [];
  const arrStat = [];
  const padawanName = getPadawanNames();
  const statSaber = getLightsaberScores();
  for (let i = 0; i < padawanName.length; i += 1) {
    arrStat[i] = padawanName[i];
    arrStat[i] = statSaber[i];
  }
  return arrStat;
}

function writeStats() {

}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
