const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
// const padawanNames = require('./data')

function getPadawanNames() {
  return names;
}

const getPadawanNames = function getPadawanNames() { return fs.readFileSync('./data/padawans.txt') };

const getLightsaberScores = function getLightsaberScores() { return fs.readFileSync('./data/scores.txt');
  }
