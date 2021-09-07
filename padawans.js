const fs = require('fs');

function getFileDataArr(fileName) {
  const fileDataStr = fs.readFileSync(`./data/${fileName}`, 'utf-8');
  const fileDataArr = fileDataStr.split('\n').filter((padawan) => padawan !== '');
  return fileDataArr;
}

const padawans = getFileDataArr('padawans.txt');
const scores = getFileDataArr('scores.txt');

function getPadawanNames() {
  return padawans;
}

function getLightsaberScores() {
  const scoresNum = scores.map((score) => parseFloat(score));
  return scoresNum;
}

function getStats() {
  const stats = [];
  const scoresNum = getLightsaberScores();

  for (let i = 0; i < padawans.length; i++) {
    stats.push([padawans[i], scoresNum[i]]);
  }
  return stats;
}

function writeStats() {
  let statsTxt = '';
  const statsArr = getStats();
  for (let i = 0; i < statsArr.length; i++) {
    statsTxt += `${statsArr[i][0]} ${statsArr[i][1]}`;
    if (i !== statsArr.length - 1) statsTxt += '\n';
  }

  fs.writeFileSync('./data/stats.txt', statsTxt);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
