const fs = require('fs');

function getPadawanNames() {
  const padawanNames = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  return padawanNames;
}

function getLightsaberScores() {
  const saberScores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  const arr = [];
  for (let i = 0; i < saberScores.length; i += 1) {
    arr.push(Number(saberScores[i]));
  }
  return arr;
}

function getStats() {
  const padawanNames = getPadawanNames();
  const saberScores = getLightsaberScores();
  const arrScores = [];
  for (let i = 0; i < saberScores.length; i += 1) {
    arrScores.push([padawanNames[i], saberScores[i]]);
  }
  return arrScores;
}

function writeStats() {
  const stats = getStats();
  const str = stats.map((el) => el.join(' ')).join('\n');
  const data = fs.writeFileSync('data/stats.txt', str);
  return data;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
