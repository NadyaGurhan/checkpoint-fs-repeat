const fs = require('fs');

function getPadawanNames() {
  const names = (fs.readFileSync('data/padawans.txt', 'utf8')).split('\n');
  return names.slice(0, 4);
  console.log(names.slice(0, 4));
}
// не понимаю в чем ошибка в консоли все верно
getPadawanNames();

function getLightsaberScores() {
  const scores = (fs.readFileSync('data/scores.txt', 'utf8')).split('\n');

  const arr = scores.map((el) => +el);
  return arr;
  console.log(arr);
}

// не понимаю в чем ошибка в консоли все верно
getLightsaberScores();

function getStats() {
  const names = (fs.readFileSync('data/padawans.txt', 'utf8')).split('\n');
  const scores = (fs.readFileSync('data/scores.txt', 'utf8')).split('\n');

  console.log(names);

  const arr = [];

  for (let i = 0; i < names.length; i++) {
    for (let j = 0; j < scores.length; j++) {
      const smallarr = [];

      if (i === j) {
        smallarr.push(names[i]);
        smallarr.push(scores[j]);
        arr.push(smallarr);
      }
    }
  }

  console.log(arr);
}

// не успела привести scores к числам

getStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
