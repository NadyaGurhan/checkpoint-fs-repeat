const fs = require('fs');
const { EOL } = require('os');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return padawans.trim().split(EOL);
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
  return scores.split(EOL).map((el) => Number(el));
}

function getStats() {
  const newArray = [];
  for (let i = 0; i < getPadawanNames().length; i++) {
    newArray.push([getPadawanNames()[i], getLightsaberScores()[i]]);
  }
  return newArray;
}

function writeStats() {
  const stats = getStats();
  fs.writeFileSync(
    'data/stats.txt',
    stats.join(EOL),
    'utf8',
  );
}
