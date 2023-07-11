const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n');
  return padawans.filter((el) => el.length > 0);
}

function getLightsaberScores() {
  const score = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');
  return score.filter((el) => el.length > 0).map((el) => Number(el));
}
function getStats() {
  const padawans = getPadawanNames();
  const score = getLightsaberScores();
  const result = [];
  for (let i = 0; i < padawans.length; i += 1) {
    result.push([padawans[i], score[i]]);
  }
  return result;
}

function writeStats() {
  const fileNameSave = './data/stats.txt';
  let saveStr = [];
  const arrStat = getStats();
  for (let i = 0; i < arrStat.length; i += 1) {
    saveStr.push(`${arrStat[i][0]} ${arrStat[i][1]}`);
  }
  fs.writeFileSync(fileNameSave, saveStr.join('\n'), 'utf8');
}

writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
