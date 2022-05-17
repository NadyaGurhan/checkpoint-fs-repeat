function getPadawanNames() {
  const fs = require('fs');
  let read = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return read.split('\n').slice(0, 4);
}

function getLightsaberScores() {
  const fs = require('fs');
  let read = fs.readFileSync('./data/scores.txt', 'utf-8');
  return read.split('\n').slice(0, 4).map((item) => +item);
}

function getStats() {
  let arr = [];
  for (let i = 0; i < 4; i++) {
    let newArr = [];
    newArr.push(getPadawanNames()[i], getLightsaberScores()[i]);
    arr.push(newArr);
  }
  return arr;
}

function writeStats() {
  const fs = require('fs');
  let result = getStats().map((item) => item.join(' ')).join('\n');
  fs.appendFileSync('./data/stats.txt', result); 
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
