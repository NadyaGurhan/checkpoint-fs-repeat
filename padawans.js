const fs = require('fs');

const padawanFilePath = './data/padawans.txt';
const padawanFileData = fs.readFileSync(padawanFilePath, 'utf8');
const padawanFileLines = padawanFileData.split('\n');

const lightsaberFilePath = './data/scores.txt';
const lightsaberFileData = fs.readFileSync(lightsaberFilePath, 'utf8');
const lightsaberFileLines = lightsaberFileData.split('\n');

function getPadawanNames() {
  const PadawanNames = [];
  for (let i = 0; i < padawanFileLines.length - 1; i += 1) {
    PadawanNames[i] = padawanFileLines[i];
  }
  return PadawanNames;
}
function getLightsaberScores() {
  const lightsaberNumbers = [];
  for (let i = 0; i < lightsaberFileLines.length; i += 1) {
    lightsaberNumbers[i] = Number(lightsaberFileLines[i]);
  }
  return lightsaberNumbers;
}
function getStats() {
  const arrStats = [];
  for (let i = 0; i < lightsaberFileLines.length; i += 1) {
    arrStats[i] = [padawanFileLines[i], Number(lightsaberFileLines[i])];
  }
  return arrStats;
}
function writeStats(stats) {
  const string = stats.join('\n').replaceAll(',', ' ');
  console.log(string);
  fs.writeFileSync('data/stats.txt', string);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
