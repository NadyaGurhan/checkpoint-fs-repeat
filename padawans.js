const fs = require('fs');

function getPadawanNames() {
  const getPad = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');

  return getPad;
}

function getLightsaberScores() {
  const read = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map((el) => Number(el));

  return read;
}

function getStats() {
  const getPad = getPadawanNames();
  const read = getLightsaberScores();
  const arr = [];
  for (let i = 0; i < getPad.length; i++) {
    arr.push([getPad[i], read[i]]);
  }
  return arr;
}

function writeStats() {

}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
