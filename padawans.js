
const fs = require('fs')


function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
}

function getLightsaberScores() {
  const data = fs.readFileSync('./data/scores.txt', 'utf-8').split(' ');
  return Number(data);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
