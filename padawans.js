const fs = require('fs');

function getPadawanNames() {
  const names1 = fs.readFileSync('data/padawans.txt', 'utf-8');
  const names = names1.trim().split('\n');
  return names;
}

function getLightsaberScores() {
  const scores1 = fs.readFileSync('data/scores.txt', 'utf-8');
  const scores = scores1.trim().split('\n');
  const scoresNum = [];
  for (let i = 0; i < scores.length; i++) {
    scoresNum.push(Number(scores[i]));
  }

  return scoresNum;
}

function getStats() {
  const names1 = fs.readFileSync('data/padawans.txt', 'utf-8');
  const names = names1.trim().split('\n');
  const scores1 = fs.readFileSync('data/scores.txt', 'utf-8');
  const scores = scores1.trim().split('\n');
  const scoresNum = [];
  for (let i = 0; i < scores.length; i++) {
    scoresNum.push(Number(scores[i]));
  }
  const stats = [];
  for (let i = 0; i < names.length; i++) {

  }
}

function writeStats() {

}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
