const fs = require('fs')

function getPadawanNames() {
  const padawanNames = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  padawanNames.pop();
  return padawanNames;
}
console.log(getPadawanNames());

function getLightsaberScores() {
  const padawanScore = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  return padawanScore.map(el => +(el));
}
console.log(getLightsaberScores());

function getStats() {
  const padawanNames = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  padawanNames.pop();
  let padawanScore = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  padawanScore = padawanScore.map(el => +(el));
  let result = [];
  for(let i = 0 ; i < padawanNames.length; i++ ){
  let arr = [padawanNames[i], padawanScore[i]];
  result.push(arr);  
  }
  return result
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
