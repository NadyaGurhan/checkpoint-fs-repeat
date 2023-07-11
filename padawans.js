const fs = require('fs')

function getPadawanNames() {
  const padawans = fs.readFileSync('./padavans.txt', 'utf-8');
  return padawans
}
console.log(padawans)


function getLightsaberScores() {
  const scores = fs.readFileSync('/data/scores.txt', 'utf-8');
  return scores
}



function getStats() {
const stats = 
return
}


function writeStats() { 

}







module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
