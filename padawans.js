const fs = require('fs');

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return names.split('\n').slice(0, -1);
}

function getLightsaberScores() {
  const swords = fs.readFileSync('./data/scores.txt', 'utf-8');
  return swords.split('\n').map((el) => Number(el));
}

function getStats() {
  const names = getPadawanNames();
  const score = getLightsaberScores();
  const arrDone = [];
  for (let i = 0; i < names.length; i += 1) {
    const arr = [];
    arr.push(names[i], score[i]);
    arrDone.push(arr);
  }
  return arrDone;
}
getStats();
function writeStats() {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
