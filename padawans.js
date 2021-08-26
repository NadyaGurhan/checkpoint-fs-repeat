const fs = require('fs');

function getPadawanNames() {
  const padNames = fs.readFileSync(
    './data/padawans.txt',
    'utf-8',
  );
  return padNames.split('\n').slice(0, -1);
}

function getLightsaberScores() {
}

function getStats() {
}

function writeStats() {
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
