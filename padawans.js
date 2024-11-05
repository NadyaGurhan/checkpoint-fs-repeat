const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8');

function getPadawanNames() {
  let str = '';
  for (let i = 0; i < padawans.length; i++) {
    str += padawans[i];
  }
  return str.trim().split('\r\n');
}

function getLightsaberScores() {
  let str = '';
  for (let i = 0; i < scores.length; i++) {
    str += scores[i];
  }
  const allNum = str.split('\r\n');
  const answer = allNum.map((el) => Number(el));
  return answer;
}
console.log(getLightsaberScores());

function getStats() {}

function writeStats() {}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
