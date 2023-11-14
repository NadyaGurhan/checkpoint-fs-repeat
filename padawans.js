const fs = require('fs');

const dataName = fs.readFileSync('./data/padawans.txt', 'utf-8');
const dataScore = fs.readFileSync('./data/scores.txt', 'utf-8');
function getPadawanNames() {
  const newArr = dataName.split('\n');
  const newArr1 = newArr.splice(4);
  return newArr;
}

function getLightsaberScores() {
  const res = dataScore.split('\n');
  const result = res.map((el) => Number(el));
  return result;
}
function getStats() {
  const pad = getPadawanNames();
  const scores = getLightsaberScores();
  const arr = Array(4).fill(0);
  const res=[]
  for (let i = 0; i < pad.length; i++) {
    res.push([pad[i], scores[i]]);
  }
  return res;
}

function writeStats() {
  const data = getStats();
  fs.writeFileSync('./data/stats.txt', data, 'utf-8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
