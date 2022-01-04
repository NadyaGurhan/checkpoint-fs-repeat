const fs = require('fs');

function getPadawanNames() {
  let padawanList = fs.readFileSync('./data/padawans.txt', 'utf8');
  padawanList = padawanList.split('\n');
  padawanList.pop();
  return padawanList;
}

function getLightsaberScores() {
  const scoreList = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');
  for (let i = 0; i < scoreList.length; i += 1) {
    scoreList[i] = parseFloat(scoreList[i]);
  }
  return scoreList;
}

function getStats() {
  const arr = [];
  for (let i = 0; i < getPadawanNames().length; i += 1) {
    arr.push([getPadawanNames()[i], getLightsaberScores()[i]]);
  }
  return arr;
}

function writeStats() {
  const result = getStats().join('\n').replaceAll(',', ' ');
  fs.writeFileSync('data/stats.txt', result, 'utf8');
  return result;
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
