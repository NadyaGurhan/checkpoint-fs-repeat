const fs = require('fs');

function getPadawanNames() {
  let a = [];
  a = fs.readFileSync('data/padawans.txt', 'utf-8').split('\n');
  
  return a;
}
function getLightsaberScores() {
  return fs.readFileSync('data/scores.txt', 'utf-8').split('\n');
}

function getStats(){

}

function writeStats(){

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

