const fs = require('fs');

function getPadawanNames() {
  const res = fs.readFileSync('data/padawans.txt', 'utf8').split('\n');
  res.pop();
  // console.log(res);
  return res;
}
getPadawanNames();

function getLightsaberScores() {
  const res = fs.readFileSync('data/scores.txt', 'utf8').split('\n');
  const result = res.map((el) => Number(el));
  // console.log(result);
  return result;
}
getLightsaberScores();

function getStats() {
  const res = [];
  const arrPadawans = fs.readFileSync('data/padawans.txt', 'utf8').split('\n');
  arrPadawans.pop();
  const arr = fs.readFileSync('data/scores.txt', 'utf8').split('\n');
  const arrScore = arr.map((el) => Number(el));

  for (let i = 0; i < arrPadawans.length; i++) {
    for (let j = 0; j < arrScore.length; j++) {
      if (i === j) {
        res.push([arrPadawans[i], arrScore[j]]);
        // console.log(res);
      }
    }
  }
  return res;
}
getStats();

function writeStats() {
  const res = getStats().join('\n');
  const result = fs.writeFileSync('data/stats.txt', res.replace(/,/g, ' '));
  // console.log(result);
  return result;
}
writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
