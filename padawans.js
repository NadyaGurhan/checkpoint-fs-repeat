const fs = require('fs');



function getPadawanNames() {
  const result = fs.readFileSync('./data/padawans.txt', 'utf-8')
  
  return result.split('\n').pop()

}

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
