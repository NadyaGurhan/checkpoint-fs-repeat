const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n');
const scores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');

function getPadawanNames() {
  const result = [];
  for (let i = 0; i < padawans.length - 1; i += 1) {
    result.push(padawans[i]);
  }
  return result;
}

function getLightsaberScores() {
  const result = [];
  for (let i = 0; i < scores.length; i += 1) {
    result.push(Number(scores[i]));
  }
  return result;
}

function getStats() {
  const result = [];
  for (let i = 0; i < getPadawanNames().length; i += 1) {
    let arr = []
    arr.push(getPadawanNames()[i]);
    arr.push(getLightsaberScores()[i]);
    result.push(arr);
  }
  return result;
}

function writeStats(arrPerson, path) {
  for (let i = 0; i < arrPerson.length; i+=1) {
    fs.appendFileSync(path, `${}\n`)
  }
  console.log('done');
};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
