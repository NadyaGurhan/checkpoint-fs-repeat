const fs = require('fs');

function getPadawanNames() {
  const data = fs.readFileSync('data/padawans.txt', 'utf8').trim().split('\n');
  console.log(data);
  return data;
}
getPadawanNames();
function getLightsaberScores() {
  const data = fs.readFileSync('data/scores.txt', 'utf8').split('\n').map(Number);
  console.log(data);
  return data;
}
getLightsaberScores();
function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  const test = names.map((name, index) => [name, scores[index]]);
  console.log(test);
  return test;
}
getStats();
function writeStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  const result = [];
  for (let i = 0; i < names.length; i++) {
    result.push(`${names[i]} ${scores[i]}`);
  }
  fs.writeFileSync('data/stats.txt', result.join('\n'), 'utf8');
}
writeStats();
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
