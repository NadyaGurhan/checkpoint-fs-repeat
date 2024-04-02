const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const padavanList = fs.readFileSync('./checkpoint-fs/data/padawans.txt', 'utf8').replaceAll('\r', '').split('\n');
  // const arrPadavanList = padavanList.map((el) => el.split('\n'))
  return padavanList;
}

function getLightsaberScores() {
  const scoreList = fs.readFileSync('./checkpoint-fs/data/scores.txt', 'utf8').replaceAll('\r', '').split('\n');
  return scoreList;
}

function getStats() {
  const res = [];
  for (let i = 0; i < padavanList.length; i++) {
    res.push(padavanList[i]);
    res.push(scoreList[i]);
  }
  return res;
}

function writeStats() {
  fs.writeFileSync('./checkpoint-fs/data/padawanStats.txt', res, 'utf8')
}
