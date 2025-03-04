const fs = require('fs');
const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
const { EOL } = require('os');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8');

function getPadawanNames() {
  const newPadawans = padawans.split(EOL).slice(0, -1);
  return newPadawans;
}

function getLightsaberScores() {
  const newScores = scores.split(EOL).map((el) => (el = +el));
  
  return newScores;
}
console.log(getLightsaberScores())


function getStats() {
  let newArr = getPadawanNames().map((el) => el.split(','));
 

  for (let i = 0; i<getLightsaberScores().length; i++){
    result = newArr.map(el => el.concat(getLightsaberScores()[i]))
  }

  
  return result;
}
console.log(getStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  //   getStats,
  //   writeStats,
};
