const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
padawans.pop();
function getPadawanNames() {
  return padawans;
}
function getLightsaberScores() {
  const scoreesToNum = [];
  for (let i = 0; i < scores.length; i += 1) {
    scoreesToNum.push(+scores[i]);
  }
  return scoreesToNum;
}
function getStats() {
  const padawansStyle = [];
  let container = [];
  for (let i = 0; i < padawans.length; i += 1) {
    container.push(padawans[i]);
    container.push(+scores[i]);
    padawansStyle.push(container);
    container = [];
  }
  return padawansStyle;
}
function writeStats() {
  const padawansStyle = [];
  let container = [];
  for (let i = 0; i < padawans.length; i += 1) {
    container.push(padawans[i]);
    container.push(+scores[i]);
    padawansStyle.push(container);
    container = [];
  }
  fs.writeFileSync(`./data/stats.txt`, padawansStyle.join('\n'), 'utf-8');
  return padawansStyle;
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
