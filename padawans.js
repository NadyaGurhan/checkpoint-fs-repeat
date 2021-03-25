const fs = require('fs');

function getPadawanNames() {
  let fileContent = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return fileContent.split('\n').slice(0, -1);
}

function getLightsaberScores() {
  let fileContent = fs.readFileSync('./data/scores.txt', 'utf-8');
  return fileContent.split('\n').map((el) => +el);
}

function getStats() {
  const newGetPadawanNames = getPadawanNames().map((el) => [el]);
  for (let i = 0; i < getLightsaberScores().length; i += 1) {
    newGetPadawanNames[i].push(getLightsaberScores()[i]);
  }
  return newGetPadawanNames;
  fs.appendFileSync('./data/stats.txt', newGetPadawanNames); 
}

function writeStats() {
  const n = getStats().join('\n').split(',').join(' ');
  fs.writeFileSync('./data/stats.txt', n);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
