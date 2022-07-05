const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
function getPadawanNames(){
  const name = fs.readFileSync('padawans.txt');
}

function getLightsaberScores(){
  const score = fs.readFileSync('scores.txt');
}
function getStats(){
  
}