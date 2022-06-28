const fs = require('fs');

function getPadawanNames() {
  const padawan = fs.readFileSync('./data/padawans.txt', 'utf8');
 
  return padawan.split(' ');

}
getPadawanNames();

function getLightsaberScores() {

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
