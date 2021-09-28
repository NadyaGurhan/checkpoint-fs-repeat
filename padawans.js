const fs = require('fs');

const dataPadawans = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().replace(/^\s+/, ' ');
const dataScores = fs.readFileSync('./data/scores.txt', 'utf-8');

function getPadawanNames() {
  return dataPadawans.split();
}

function getLightsaberScores() {
  return dataScores.split();
}

function getStats() {

}

function writeStats() {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
