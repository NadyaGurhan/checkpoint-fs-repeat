const { log } = require('console');
const fs = require('fs');
// const path = require('path');

function getPadawanNames() {
  const list = fs.readFileSync(('data/padawans.txt'), 'utf8');
  const result = (list.split('\n'));
  return result.slice(0, result.length - 1);
}

function getLightsaberScores() {
  const list = fs.readFileSync(('data/scores.txt'), 'utf8');
  const result = (list.split('\n'));
  return result.map((el) => Number(el));
}
console.log(getLightsaberScores());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
