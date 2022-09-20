const fs = require('fs');

function getPadawanNames() {
  const padawanList = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  return padawanList;
}

function getLightsaberScores() {
  const score = fs.readFileSync('./data/scores.txt').split('\n');
  return score;
}
function getStats() {
  let padawanList = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  const scorest = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map((item) => +item);
  padawanList = padawanList.map((item, index) => [item, scorest[index]]);
  padawanList.pop();
  return padawanList;
}
console.log(getStats());
function writeStats() {
  const padawanList = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  const scorest = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map((item) => +item);
  // padawanList = padawanList.map((item, index) => [item, scorest[index]]);
  // padawanList.pop();
  // padawanList.forEach((item) => fs.appendFileSync('./data/stats.txt', `${item}\n`));
  for (let i = 0; i < padawanList.length; i++) {
    fs.appendFileSync('./data/stats.txt', `${padawanList[i]} ${scorest[i]}\n`);
  }
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
