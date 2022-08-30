const fs = require('fs');
const path = require('path');

function getPadawanNames() {
  const padavans = fs.readFileSync(path.join(__dirname, 'data/padawans.txt'), 'utf-8').split('\n');
  padavans.pop();
  return padavans;
}

function getLightsaberScores() {
  const light = fs.readFileSync(path.join(__dirname, 'data/scores.txt'), 'utf-8').split('\n');
  const saber = light.map((el) => parseInt(el, 10));
  return saber;
}

function getStats() {
  return 1;
}

function writeStats() {
  return 1;
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
