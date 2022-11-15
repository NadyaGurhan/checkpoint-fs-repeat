const fs = require('fs');
const { resourceLimits } = require('worker_threads');
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
const jedi = fs.readFileSync('./data/padawans.txt', 'utf-8');

function getPadawanNames() {
  const jediArr = jedi.split('\n');
  const jedies = jediArr.slice(0, -1);
  return jedies;
}
console.log(getPadawanNames());

function getLightsaberScores() {
  const scoresArr = scores.split('\n');
  const res = [];
  for (let i = 0; i < scoresArr.length; i++) {
    res.push(Number(scoresArr[i]));
  }
  return res;
}
console.log(getLightsaberScores());

function getStats() {
  const jedi = getPadawanNames();
  const score = getLightsaberScores();
  const result = [];
  for (let i = 0; i < jedi.length; i++) {
    result.push([jedi[i], score[i]]);
  } return result;
}

function writeStats() {

}
