const fs = require('fs');

function getPadawanNames() {  
  return fs.readFileSync('./data/padawans.txt', 'utf8')
  .trim()
  .split('\n');
}

function getLightsaberScores() {  
  return fs.readFileSync('./data/scores.txt', 'utf8')
  .trim()  
  .split('\n')
  .map(padavanScore => +padavanScore);
}

function getStats() {
  const padavans = getPadawanNames();
  const padavansScores = getLightsaberScores();
  return padavans.map((padavan, index) => [padavan, padavansScores[index]]);
}

function writeStats() {
  const dataBase = getStats();  
  fs.writeFileSync('data/stats.txt', dataBase
  .map(padavan => padavan.join(' '))
  .join('\n'));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
