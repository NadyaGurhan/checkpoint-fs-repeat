const fs = require('fs');
const path = require('path');

const padawans1 = fs.readFileSync(path.join(__dirname, 'data/padawans.txt'), 'utf8');
const ligth = fs.readFileSync(path.join(__dirname, 'data/scores.txt'), 'utf8');

function getPadawanNames() {
  const padawans = padawans1.split('\n').slice(0, -1);
  return padawans;
}

function getLightsaberScores() {
  const result = ligth.split('\n');
  for (let i = 0; i < result.length; i++) {
    result[i] = +result[i];
  }
  return result;
}

function getStats() {
  const result = [];
  const name = getPadawanNames();
  const scores = getLightsaberScores();
  for (let i = 0; i < name.length; i += 1) {
    result.push([name[i], scores[i]]);
  }

  return result;
}

function writeStats() {
  const stats = getStats();
  fs.openSync(path.join(__dirname, 'data/stats.txt'), 'w');
  for (let i = 0; i < stats.length - 1; i++) {
    fs.appendFileSync(path.join(__dirname, 'data/stats.txt'), `${stats[i].join(' ')}\n`);
  }
  fs.appendFileSync(path.join(__dirname, 'data/stats.txt'), `${stats[stats.length - 1].join(' ')}`);
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
