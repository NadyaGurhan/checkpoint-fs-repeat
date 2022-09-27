/* eslint-disable no-use-before-define */
const fs = require('fs');

function getPadawanNames() {
  const padawanNames = fs.readFileSync('data/padawans.txt', 'utf-8').split('\n');
  padawanNames.pop();
  return padawanNames;
}
function getLightsaberScores() {}
function getStats() {}
function writeStats() {}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};