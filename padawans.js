const fs = require('fs');
const { get } = require('http');

function getPadawanNames() {
  let allNames = [];
  let names = fs.readFileSync('./data/padawans.txt', 'utf-8');
  names.split('\n').forEach(item => {
    if(item !== '') {
      allNames.push(item);
    }
  });
  return allNames;
}
function getLightsaberScores() {
  let allScore = [];
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
  scores.split('\n').forEach(item => {
    if(item !== '') {
      allScore.push(+item);
    }
  });
  return allScore;
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
