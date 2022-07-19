const fs = require('fs');

function getPadawanNames(path) {
  const names = fs.readFileSync(path);
  // const padawans = names.filter((el) => el !== '')
  const padawans = names.find((el) => el === 'Revan', 'Bastila Shan', 'Jolee Bindo', 'Juhani');
  return padawans;
}

function getLightsaberScores(path) {
  const score = fs.readFileSync(path);
  return score;
}

function getStats(path) {
  const status = fs.readFileSync(path);
  return status;
}

function writeStats(path) {
  const data = fs.readFileSync(path);
  return data;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
