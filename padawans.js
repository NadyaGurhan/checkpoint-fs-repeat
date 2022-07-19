const fs = require('fs')

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');

function getPadawanNames() {
  let padawansAll = []
  padawans.forEach(element => {
    if (element !== ''){
      padawansAll.push(element);
    } 
  });
  return padawansAll;
}

getPadawanNames()

const lightsaberScores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
// console.log(lightsaberScores);

function getLightsaberScores() {
  let lightsaberScoresAll = [];
  lightsaberScores.forEach(element => {
    lightsaberScoresAll.push(+element);
  });
  return lightsaberScoresAll;
}

getLightsaberScores()





// console.log(getPadawanNames(padawans))
module.exports = {
  getPadawanNames,
  getLightsaberScores,
//   // getStats,
//   // writeStats,
};