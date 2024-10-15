
const fs = require('fs');

function getPadawanNames() {
  const text = fs.readFileSync('./data/padawans.txt', 'utf8'); 
  const newArr = text.split('\n').slice(0,-1); 

  return newArr;
}

function getLightsaberScores () {
  const text = fs.readFileSync('./data/scores.txt', 'utf8'); 
  const newArr = text.split('\n')
  .map(score => Number(score))  
return newArr;
}

function getStats () {

}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
