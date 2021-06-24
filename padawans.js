
const fs = require('fs')

function getPadawanNames() {
  let names = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  for (let i = 0; i < names.length; i++) {
    if(names[i] === '') {
      names.splice(i, 1)
    };
  }
  return names;
}

function getLightsaberScores() {
  let scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  for (let i = 0; i < scores.length; i++) {
    scores[i] = +scores[i];
  }
  return scores;
}














module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
