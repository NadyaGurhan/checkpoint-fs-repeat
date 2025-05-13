const fs = require('fs');
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const padavans = fs
    .readFileSync('./data/padawans.txt', 'utf-8')
    .split('\n')
    .slice(0, -1);
  return padavans;
}

function getLightsaberScores() {
  const arr = [];
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  for (let i = 0; i < scores.length; i++) {
    scores[i] = Number(scores[i]);
    arr.push(scores[i]);
  }

  return arr;
}
function getStats() {
  const arr = []
  const padavans = fs
    .readFileSync('./data/padawans.txt', 'utf-8')
    .split('\n')
    .slice(0, -1);
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  for(let i = 0; i < padavans.length; i++){
    
  }
  // и тут логика, что я прохожусь циклом в цикле и записываю данные, но уже не осталось времени
}

function writeStats() {}
