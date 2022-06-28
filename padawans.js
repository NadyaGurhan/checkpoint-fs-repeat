const fs = require('fs');
const path = require('path');

function getPadawanNames(file) {
  const namesFile = fs.readFileSync(path.join(__dirname, `../${file}`), 'utf-8');
  const names = [];
  return names.push(namesFile);
}

function getLightsaberScores(file) {
  return fs.readFileSync(path.join(__dirname, `../${file}`), 'utf-8');
}

function getStats(file) {
  return fs.readFileSync(path.join(__dirname, `../${file}`), 'utf-8');
}

const writeStats = () => fs.appendFileSync('./data/stats.txt');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
