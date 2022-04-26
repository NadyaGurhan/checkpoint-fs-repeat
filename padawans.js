const fs = require('fs');

function getPadawanNames () {
  const padawanNames = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const padawans = padawanNames.trim().split('\n')
  return padawans
}

function getLightsaberScores () {
  const LightsaberScores = fs.readFileSync('./data/scores.txt', 'utf-8');
  const scores = LightsaberScores.trim().split('\n');
  const arrOfNum = scores.map(str => {
    return Number(str);
  });
  return arrOfNum
}

// function getStats () {
//   let score = getLightsaberScores ();
//   let names = getPadawanNames ();

// }



module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
