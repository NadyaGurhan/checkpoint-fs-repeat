const fs = require('fs');
const { EOL } = require('os');

function getPadawanNames() {
  const data = fs.readFileSync('data/padawans.txt', 'utf-8');
  return data.split(EOL).filter((name) => name.trim());
}
function getLightsaberScores() {
  const nums = fs.readFileSync('data/scores.txt', 'utf-8');
  return nums.split(EOL).map((el) => Number(el));
}
function getStats() {
const newAr = [];
const name = fs.readFileSync('data/padawans.txt', 'utf-8');
const nums = fs.readFileSync('data/scores.txt', 'utf-8');

}
function writeStats() {}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
