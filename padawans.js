const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const getPadawanNam = fs.readFileSync('./data/padawans.txt', 'utf-8');
function getPadawanNames() {
return getPadawanNam.split('\n')
}


const getLightsaberScor = fs.readFileSync('./data/scores.txt', 'utf-8');
function getLightsaberScores() {
return getLightsaberScor.split('\n')
}


