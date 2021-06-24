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

function getStats() {
  let arrStats = [];
  let names = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  for (let i = 0; i < names.length; i++) {
    if(names[i] === '') {
      names.splice(i, 1)
    };
  }
  let scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  scores = scores.map(item => item = +item);
  for (let i = 0; i < names.length; i++) {
    arrStats[i] = [names[i], scores[i]]
  }
  return arrStats;
}

function writeStats(foo) {
  for (let i = 0; i < foo.length; i++) {
    foo[i] = foo[i].join(' ')
  }
  fs.writeFileSync('./data/stats.txt', `${foo.join('\n')}`);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
