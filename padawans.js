const fs = require('fs');

function getPadawanNames() {
  const text = fs.readFileSync('./data/padawans.txt', 'utf8');
  const spl = text.split('\n');
  const pads = spl.slice(0, -1);
  return pads;
}

function getLightsaberScores() {
  const textScore = fs.readFileSync('./data/scores.txt', 'utf8');
  const spl = textScore.split('\n');
  return spl.map(Number);
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  let arr = [];
  for (let i = 0; i < names.length; i++) {
    arr.push([names[i], scores[i]]);
  }
  return arr;
}

function writeStats() {
  const stats = getStats();
  return fs.writeFileSync('./data/stats.txt', stats.join('\n').replace(/,/g, ' '));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
