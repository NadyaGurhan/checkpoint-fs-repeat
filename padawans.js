const fs = require('fs')


module.exports = {
  getPadawanNames,
  getLightsaberScores,
 // getStats,
  //writeStats,
};

function getPadawanNames(){
  
  const arr = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  return arr.filter((str) => str !== '');
};
function getLightsaberScores(){
  const arr =fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  return arr.map((el) => parseFloat(el) );
};;