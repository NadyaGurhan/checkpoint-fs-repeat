const fs = require('fs');

function getArrayData(path) {
  const fileCrew = fs.readFileSync(path, 'utf8').split('\n');
  return fileCrew;
}
function getPadawanNames() {
  const data = getArrayData('./data/padawans.txt');
  data.pop();
  return data;
}

function getLightsaberScores() {
  const data = getArrayData('./data/scores.txt');
  const numberArr = data.map((el) => Number(el));
  return numberArr;
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();

  const result = [];

  for (let i = 0; i < padawans.length; i += 1) {
    result.push([padawans[i], scores[i]]);
  }

  return result;
}
function writeStats(stats) {
  for (let i = 0; i < stats.length - 1; i += 1) {
    fs.appendFileSync('./data/stats.txt', `${stats[i][0]} ${stats[i][1]}\n`, 'utf8');
  }
  const l = stats.length;
  fs.appendFileSync('./data/stats.txt', `${stats[l - 1][0]} ${stats[l - 1][1]}`, 'utf8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
