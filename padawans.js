const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf8');
  const padawans1 = padawans.split('\n');
  const padawans2 = padawans1.pop();
  console.log(padawans2);
  // console.log(padawans2);
  //   const allNames = [];
  return padawans1;
}
console.log(getPadawanNames());

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf8');
  const scores1 = scores.split('\n');
  // const padawans2 = padawans1.pop();
  // console.log(padawans2);
  //   const allNames = [];
  return scores1;
}
console.log(getLightsaberScores());

function getStats() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf8');
  const padawans1 = padawans.split('\n');
  const padawans2 = padawans1.pop();
  console.log(padawans2);
  return padawans2;
}
console.log(getStats());

function writeStats() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf8');
  const padawans1 = padawans.split('\n');
  const padawans2 = padawans1.pop();
  console.log(padawans2);
  //   const allNames = [];
  return padawans2;
}
console.log(writeStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
