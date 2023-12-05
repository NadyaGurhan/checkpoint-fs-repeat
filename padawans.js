const fs = require('fs')
const path = require('path')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};

function getPadawanNames () {
  const fileName = './padawans.txt';
  const pathToFile = path.join(__dirname, 'data', fileName);
  const readMe = fs.readFileSync(pathToFile, 'utf-8').trim();
  const arr = readMe.split('\n')
  return arr;
};
getPadawanNames();

function getLightsaberScores () {
  const fileName = ('./scores.txt');
  const pathToFile = path.join(__dirname, 'data', fileName)
  const readMe = fs.readFileSync(pathToFile, 'utf-8').trim()
  const arr = readMe.split('\n').map(Number)
  return arr;
}
// getLightsaberScores()

// getStats

// writeStats