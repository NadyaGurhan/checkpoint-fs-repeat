const fs = require('fs');

function getPadawanNames() {
  const arr = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  arr.pop();
  // console.log(arr)
  return arr;
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map((el) => Number(el)).filter((el) => !isNaN(el));
  return scores;
}

function getStats() {
  const namesList = getPadawanNames();
  const listScores = getLightsaberScores();
  const finalList = namesList.map((arr, element) => [arr, listScores[element]]);
  return finalList;
}

function writeStats() {
  const stats = getStats();
  const writeData = stats.map((el) => el.join(' ')).join('\n');
  // console.log(writeData);
  fs.writeFileSync('./data/stats.txt', writeData);
}
writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
