const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const fileConect = fs.readFileSync('./data/padawans.txt', 'utf-8');
   return fileConect.split('\n').filter(name => name.trim() !== '') ;
}
function getLightsaberScores() {
  
}

function getStats() {
  
}

function writeStats() {
  
}