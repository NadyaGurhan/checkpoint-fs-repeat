const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const padwNames = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const padwResult = padwNames.split('\n');
  const emptyFragm = padwResult.pop();
  return padwResult;
}
// console.log(getPadawanNames());

function getLightsaberScores() {
  const getScores = fs.readFileSync('./data/scores.txt', 'utf-8');
  const resScores = getScores.split('\n').map((el) => Number(el));

  return resScores;
}
// console.log(getLightsaberScores());

function getStats() {
  // const padawans = getPadawanNames();
  // const lightsaber = getLightsaberScores();
  // const output = new Array(padawans.length);
  // for (let i = 0; i < padawans.length; i += 1) {
  //   output[i] = new Array(2);
  //   output[i][0] = padawans[i];
  //   output[i][i] = scores[i];
  // эту задачу списывал у соседа, особо ничесго не понял
}

function writeStats() {

}
