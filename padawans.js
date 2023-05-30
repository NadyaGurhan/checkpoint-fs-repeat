const fs = require('fs');

function getPadawanNames() {
  const readPadawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const padawans = readPadawans.split('\r\n').slice(0, -1);
  return padawans;
}

function getLightsaberScores() {
  const readScores = fs.readFileSync('./data/scores.txt', 'utf-8');
  const scores = readScores.split('\r\n').map((el) => Number(el));
  return scores;
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  const newArr = [];
  // console.log(names);
  names.map((el, i) => newArr.push([el, scores[i]]));
  // console.log(newArr);
  return newArr;
}

function writeStats() {
  const stat = getStats();
  const data = stat.join('\n');
  console.log(data);
  fs.writeFileSync('./data/stats.txt', data);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
