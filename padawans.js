const fs = require('fs')

function getPadawanNames(){
  const padavans = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return padavans.split('\n').pop().
}
console.log(getPadawanNames())


function getLightsaberScores(){
const reiting = fs.readFileSync('./data/scores.txt', 'utf-8');
return reiting.split('\n')
}
console.log(getLightsaberScores())

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};


