const fs = require('fs');

function getPadawanNames() {
  const pad = fs.readFileSync('./data/padawans.txt', 'utf8');
  const arrPad = pad.split('\n');
  arrPad.splice(-1, 1);
  return arrPad;
}

console.log(getPadawanNames());

function getLightsaberScores() {
  const sc = fs.readFileSync('./data/scores.txt', 'utf8');
  const arrSc = sc.split('\n');

  return arrSc;
}

console.log(getLightsaberScores());

console.log(arrPad, arrSc);

function getStats() {
  const sc = fs.readFileSync('./data/scores.txt', 'utf8');
  const arrSc = sc.split('\n');
  const pad = fs.readFileSync('./data/padawans.txt', 'utf8');
  const arrPad = pad.split('\n');
  arrPad.splice(-1, 1);

  for(let i = 0; i < arrPad.length; i++){
    
  }
}

// module.exports = {
//   getPadawanNames,
//   getLightsaberScores,
//   getStats,
//   writeStats,
// };
