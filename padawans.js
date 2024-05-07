const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  return fs.readFileSync('data/padawans.txt', 'utf8').trim().split('\r\n');
}

function getLightsaberScores() {
  const data = fs.readFileSync('data/scores.txt', 'utf8').trim();
  return data.split('\r\n').map((el) => Number(el));
}

function getStats() {
  const arr = [];
  const pad = getPadawanNames();
  const score = getLightsaberScores();
  for (let i = 0; i < pad.length; i++) {
    arr.push([pad[i], score[i]]);
  }
  return arr;
}

function writeStats(){
  const stat = getStats().join('\n').replace(/,/gi, ' ');
  return fs.writeFileSync('data/stats.txt', stat)
}