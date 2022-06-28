const fs = require('fs');

function getPadawanNames() {
  const readText = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return readText.trim().split('\n');
}

getPadawanNames();

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
  return readNum = scores.split('\n').map((el) => +el);
}

function getStats() {
  let pad = fs.readFileSync('./data/padawans.txt', 'utf-8');
  let scores = fs.readFileSync('./data/scores.txt', 'utf-8');
  pad = pad.trim().split('\n');
  scores = scores.split('\n').map((el) => +el);
  return pad.map((el, index) => [el, scores[index]]);
}

function writeStats() {
  const result = getStats().join('\n').replace(/,/gmi, ' ');
  const stats = fs.writeFileSync('./data/stats.txt', result);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
