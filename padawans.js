const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt').toString().split('\n').filter((line) => line.trim() !== '');
}

function getLightsaberScores() {
  const scoresArrStr = fs.readFileSync('./data/scores.txt').toString().split('\n').filter((line) => line.trim() !== '');
  const scoresArr = scoresArrStr.map(Number);
  return scoresArr;
}

function getStats() {
  const statsArr = [];
  const namesLength = getPadawanNames().length;

  for (let i = 0; i < namesLength; i++) {
    const stat = [getPadawanNames()[i], getLightsaberScores()[i]];
    statsArr.push(stat);
  }
  return statsArr;
}

function writeStats() {
  const statsStr = getStats().map((i) => i.join(' '));
  fs.writeFileSync('./data/stats.txt', statsStr.join('\n'), 'utf8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
