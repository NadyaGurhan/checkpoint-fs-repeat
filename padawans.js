const fs = require('fs') 

function getPadawanNames () {
  let padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
  padawans = padawans.split('\n');
  padawans.pop();
  return padawans;
}

function getLightsaberScores () {
  let scores = fs.readFileSync('./data/scores.txt', 'utf-8');
  scores = scores.split('\n').map(Number);
  return scores;
}
console.log(getLightsaberScores())

function getStats () {
  let stats = [].concat(padawans, scores);
  
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
