const fs = require('fs');

function getPadawanNames() {
  const res = fs.readFileSync('data/padawans.txt', 'utf-8').split('\n');
  res.pop();
  return res;
}

function getLightsaberScores() {
  const res = fs.readFileSync('data/scores.txt', 'utf-8').split('\n');
  const res1 = res.map((el) => +el);
  return res1;
}

function getStats() {
  const arr = [];

  const padawansArr = fs.readFileSync('data/padawans.txt', 'utf-8').split('\n');
  padawansArr.pop();

  const scoresArr = fs.readFileSync('data/scores.txt', 'utf-8').split('\n');
  scoresArr.map((el) => +el);

  for (let i = 0; i < padawansArr.length; i++) {
    for (let j = 0; j < scoresArr.length; j++) {
      if (i === j) {
        arr.push([padawansArr[i], +scoresArr[j]]); // не могу понять почему не работает(заработало:))
      }
    }
  }
  console.log(arr);
  return arr;
}

function writeStats() {
  const res = getStats().join('\n').replace(/,/g, ' ');
  const result = fs.writeFileSync('data/stats.txt', `${res}`);

  return result;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
