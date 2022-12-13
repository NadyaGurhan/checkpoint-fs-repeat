const fs = require('fs');

function getPadawanNames() {
  const read = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  const nothing = read.pop();
  return read;
}

function getLightsaberScores() {
  const read = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  console.log(read);
  return read;
}
function getStats() {
  const arr = [];
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  const stats = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  arr.push(names, stats);
  console.log(names);
}
function writeStats() {}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
