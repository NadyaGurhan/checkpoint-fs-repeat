const fs = require('fs');
let padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
let scores = fs.readFileSync('./data/scores.txt', 'utf-8');

function getPadawanNames() {
  return padawans.split('\n');
}

function getLightsaberScores() {
  let ligthsabel = [Number(scores.split('\n'))];
  return ligthsabel;
}

function getStats() {
  let stats = [[padawans.split('\n')[0], scores.split('\n')[0]],
  [padawans.split('\n')[1], [Number(scores.split('\n')[1])],
  [padawans.split('\n')[2], scores.split('\n')[2]],
  [padawans.split('\n')[3], scores.split('\n')[3]],
  ];
  return stats;
}

function writeStats() {
  return fs.writeFileSync('data/stats.txt', getStats());
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
