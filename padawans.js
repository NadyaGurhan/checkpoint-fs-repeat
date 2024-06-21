const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n'); 
  // return fs.readFileSync("data/padawans.txt", "utf-8").split('\n').slice(0,-1); - 2 вариант
}

function getLightsaberScores() {
  return fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map(Number);
}

function getStats() {
  const podawans = getPadawanNames();
  const level = getLightsaberScores();

  let arr = []
  for (let i = 0; i < podawans.length; i++){
    arr.push([podawans[i], level[i]]);
  }
  return arr;
}

function writeStats() {
  const stats = getStats().map((el) => el.join(' ')).join('\n');
  return fs.writeFileSync('./data/stats.txt', stats);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

writeStats();