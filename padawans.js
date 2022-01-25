const fs = require('fs');
const readPadavans = fs.readFileSync('./data/padawans.txt', 'utf8');
const readScores = fs.readFileSync('./data/scores.txt', 'utf8');
const writeStats = fs.writeFileSync('./data/stats.txt', 'utf8');

function getPadawanNames() {
  const result = readPadavans.split('\n');
  result.pop();
  return result;
}
function getLightsaberScores() {
  return readScores.split('\n').map((x) => parseFloat(x, 10));
}
function getStats() {
  let names = getPadawanNames();
  let scores = getLightsaberScores();
  let arr = [];
  for (let i = 0; i < names.length; i += 1) {
    arr.push([names[i], scores[i]]);
  }
  return arr;
}
function writeStats(){
const nl = getStats().join('\n');
const fileName = './data/stats.txt';
return fs.writeFileSync(fileName, nl);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
