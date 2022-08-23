const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  let padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  return padawans.splice(0, 4);
}

function getLightsaberScores() {
  const score = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  let arr = [];
  for (let i = 0; i < score.length; i++) {
    arr.push(Number(score[i]));
  }
  return arr;
}

function getStats() {
  let padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  padawans = padawans.splice(0, 4);
  let score = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  score = score.map(el => +(el));
  let arr = [];
  for (let i = 0; i < padawans.length; i++) {
    let newArr = [padawans[i], score[i]];
    arr.push(newArr);
  }
  return arr;
}

function writeStats() {
  const stats = getStats();
  let result = stats.join('\n').split(',').join(' ');
  fs.writeFileSync('./data/stats.txt', result, 'utf-8');
}

// let padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
// padawans = padawans.splice(0, 4)

// const score = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');

// let newArr = padawans.concat(score)
// console.log(newArr)

// console.log(padawans)


// const stats = getStats();
// let result = stats.join('\n');
// console.log(result)
