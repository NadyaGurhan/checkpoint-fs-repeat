const fs = require('fs');
const { EOL } = require('os');

function getPadawanNames(){
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return names.split(EOL).filter(name => name.length > 0);
}

function getLightsaberScores(){
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
  return scores.split(EOL).map(score => Number(score));
}

function getStats(){
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
  const result = names.map((name, index) => {
   [name, scores[index]];
  });
  return result;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
