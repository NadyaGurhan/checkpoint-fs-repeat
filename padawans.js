const fs = require('fs');
let padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
let scores = fs.readFileSync('./data/scores.txt', 'utf-8');

function getPadawanNames() {
  const namesArr = padawans.split('\n');
  namesArr.pop();
  return namesArr;
}

function getLightsaberScores() {
  const scoresArr = scores.split('\n');
  for (let i = 0; i < scoresArr.length; i++) {
    scoresArr[i] = +scoresArr[i];
  }
  return scoresArr;
}

function getStats() {
  const namesArr = padawans.split('\n');
  namesArr.pop();
  
  const scoresArr = scores.split('\n');
  for (let i = 0; i < scoresArr.length; i++) {
    scoresArr[i] = +scoresArr[i];
  }

  const statsArr = [];
  for (let i = 0; i < namesArr.length; i++) {
    const person = [namesArr[i], scoresArr[i]];
    statsArr.push(person);
  }
  
  return statsArr;
}

function writeStats(stats) {
  for (let i = 0; i < stats.length; i++) {
    stats[i] = stats[i].join(' ');
  }
  fs.appendFileSync('./data/stats.txt', stats.join('\n'));
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
