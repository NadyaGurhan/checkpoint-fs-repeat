const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync('data/padawans.txt', 'utf8');
  const padawansList = padawans.trim().split('\n');
  return padawansList;
}
function getLightsaberScores() {
  const scores = fs.readFileSync('data/scores.txt', 'utf-8');
  const scoreList = scores.trim().split('\n');
  console.log(scoreList);
  return scoreList.map((el) => Number(el));
}
function getStats() {
  const padawanNam = getPadawanNames();
  const lightScore = getLightsaberScores();
  const result = [];
  for (let i = 0; i < padawanNam.length; i += 1) {
    result.push([padawanNam[i], lightScore[i]]);
  }
  return result;
}
function writeStats() {
  const arrStars = getStats();
  const arrMap = arrStars.map((i) => i.join(' '));
  return fs.writeFileSync('./data/stats.txt', arrMap.join('\n'));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
