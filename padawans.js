module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
const fs = require('fs');
const padawanName = fs.readFileSync('data/padawans.txt', 'utf-8');
const score = fs.readFileSync('data/scores.txt', 'utf-8');

function getPadawanNames() {
  return padawanName.split('/n');
  console.log(padawanName)
}

function getLightsaberScores() {
  return score.split('/n');
}

function getStats() {
  const name = getPadawanNames();
  const myScore = getLightsaberScores();
  const result = [];
  for (let i = 0; i < name.length; i++){
    result.push(name[i],myScore[i])
  }
  return result;
}

function writeStats() {
 return
}
