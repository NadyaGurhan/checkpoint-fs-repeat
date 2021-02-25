const fs = require('fs');

const listPadawans = './data/padawans.txt' ;
const scorePadawans = './data/scores.txt';

  
function getPadawanNames (listPadawans) {
  
    return fs.readFileSync(listPadawans, 'utf8').trim().split('\n');
    
  }
  
function getLightsaberScores (scorePadawans) {
  return fs.readFileSync(listPadawans, 'utf8').trim().split('\n').map((el) => Number(el));
}




module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
