const fs = require('fs');

function getPadawanNames() {
  const fileContent = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf-8').toString().split('\n');
  if (fileContent[fileContent.length - 1] === '') {
    fileContent.pop();
  }
  return fileContent;
}
function getLightsaberScores() {
  const LightsaberScores = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf-8').toString().split('\n');
  if (LightsaberScores[LightsaberScores.length - 1] === '') {
    LightsaberScores.pop();
  }
  for (i = 0; i < LightsaberScores.length; i++) {
    LightsaberScores[i] = +LightsaberScores[i];
  }
  return LightsaberScores;
}
function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  const table = [];
  for (let i = 0; i < padawans.length; i++) {
    table[i][0].push(padawans[i]);
    table[i][1].push(scores[i]);
  }
  return table;
}

// console.log(getPadawanNames());
// console.log(getLightsaberScores());
//console.log(getStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
