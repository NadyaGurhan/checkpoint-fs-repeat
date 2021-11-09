const fs = require('fs');

function getPadawanNames() {
  const src = './data/padawans.txt';
  const padawansList = fs.readFileSync(src, 'utf-8');
  const list = padawansList.split('\n');
  const remove = list.pop();
  return list;
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
