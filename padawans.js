const fs = require('fs');

function getPadawanNames(){
  const text = fs.readFileSync('data/padawans.txt', 'utf-8');
}

function getLightsaberScores() {
  const number = fs.readFileSync('data/scores.txt', 'utf-8');
}

function getStats() {
  fs.writeFileSync('data/stats.txt', 'dell');
  //fs.appendFileSync('data/stats.txt', 'newData in currentFile.txt');
  }
  

  module.exports = {
    getPadawanNames,
    getLightsaberScores,
    getStats,
    writeStats,
  };
 
