const fs = require('fs');

function getPadawanNames() {
  const padawanNames = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  padawanNames.pop();
  return padawanNames;
}

function getLightsaberScores() {
  let lightsaberScores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  return lightsaberScores.map((el) => +(el));
}

function getStats() {
  const padawanNames = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  padawanNames.pop();
  let lightsaberScores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  lightsaberScores = lightsaberScores.map((el) => +(el));
  const stats = [];
  for (let i = 0; i < padawanNames.length; i++){
    let arr = [padawanNames[i], lightsaberScores[i]];
    stats.push(arr);
   }
   return stats;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
