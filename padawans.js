const fs = require('fs');

function getPadawanNames() {
  let result;
  fs.readFile('./data/padawans.txt', 'utf8', (err, content) => {
    let names = [];
    let counter = 0;
    let arr = content.split('\n');
    for (let i = 0; i < arr.length - 1; i++, counter++) {
      names.push(arr[i]);
      if (counter === arr.length - 1) {
        result = names;
      }
    }
  });
  return result;
}

console.log(getPadawanNames());

function getLightsaberScores() {
  let names = [];
  fs.readFile('./data/scores.txt', 'utf8', (err, content) => {
    let arr = content.split('\n');
    for (let elem of arr) {
      names.push();
      }
      return names;
  });
}

function getStats() {
  
}

function writeStats() {
  
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
