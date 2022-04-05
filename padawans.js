const fs = require('fs');

function getPadawanNames() {
  let padawan = fs.readFileSync('data/padawans.txt', 'utf8');
  let padawans = [];
  padawan = padawan.split('\n');
  padawans = padawan.pop('');
  return padawan;
}

function getLightsaberScores() {
  let score = fs.readFileSync('data/scores.txt', 'utf8');
  score = score.split('\n');
  for (let i = 0; i < score.length; i++) {
    score[i] = Number(score[i]);
  }
  return score;
}

function getStats() {
  let padawan = fs.readFileSync('data/padawans.txt', 'utf8');
  let padawans = [];
  padawan = padawan.split('\n');
  padawans = padawan.pop('');
  let score = fs.readFileSync('data/scores.txt', 'utf8');
  score = score.split('\n');
  for (let i = 0; i < score.length; i++) {
    score[i] = Number(score[i]);
  }
  for (let i = 0; i < padawan.length; i++) {
    padawan[i] = padawan[i] + score[i];
  }
  return padawan;
}

console.log(getStats());

function writeStats() {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
