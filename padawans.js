const fs = require('fs');

function getPadawanNames () {
  let padawansName = fs.readFileSync('./data/padawans.txt', 'utf8');
  padawansName = padawansName.split('\n');
  padawansName.pop();
  return padawansName;
}

function getLightsaberScores () {
  let swordScore = fs.readFileSync('./data/scores.txt', 'utf8');
  swordScore = swordScore.split('\n');
  let result = swordScore.map(Number);
  return result;
}

function getStats () {
  let padawansName = fs.readFileSync('./data/padawans.txt', 'utf8');
  padawansName = padawansName.split('\n');
  padawansName.pop();
  let swordScore = fs.readFileSync('./data/scores.txt', 'utf8');
  swordScore = swordScore.split('\n');
  let result = swordScore.map(Number);
  let statsDjedi = [];
  for (let i = 0; i < padawansName.length; i++){
    statsDjedi.push([padawansName[i], result[i]]);
  }
  return statsDjedi;
}

 function writeStats () {
  const stats = getStats().join('\n').replace(/[,]/gi, ' ');
  fs.writeFileSync('./data/stats.txt', stats);
 }

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
