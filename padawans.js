let fs = require('fs');
let firstFile = './data/padawans.txt';
let firstData = fs.readFileSync(firstFile, 'utf8');

let secondFile = './data/scores.txt';
let secondData = fs.readFileSync(secondFile, 'utf8');

function getPadawanNames() {
  return firstData.split('\n').filter(Boolean)
}

let names = getPadawanNames();

function getLightsaberScores() {
  return secondData.split('\n').map(a => +a);
}
let scores = getLightsaberScores();

function getStats() {
  let result = [];
  for (let i = 0; i < names.length; i++) {
    result[i] = [names[i], scores[i]];
  }
  let str = JSON.stringify(result);
  fs.appendFileSync('./data/stats.txt', str);
  return result;
}

function writeStats() {
  let result = []
  for (let i = 0; i < names.length; i++) {
    result.push(`${names[i]} ${scores[i]}`);
  }
  let str = result.join('\n');
  fs.writeFileSync('./data/stats.txt', str);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
