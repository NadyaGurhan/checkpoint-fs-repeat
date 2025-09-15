const { log } = require('console');
const fs = require('fs');
const { EOL } = require('os');

function getPadawanNames() {
  return fs
    .readFileSync('./data/padawans.txt', 'utf8')
    .split(EOL)
    .filter((i) => i !== '');
}

function getLightsaberScores() {
  return fs
    .readFileSync('./data/scores.txt', 'utf8')
    .split(EOL)
    .map((i) => +i)
    .filter((i) => i !== '');
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  const stats = [];
  for (let i = 0; i < names.length; i++) {
    stats.push([names[i], scores[i]]);
  }
  return stats;
}

function writeStats(arr) {
  let string = '';

  for (let i = 0; i < arr.length; i++) {
    const name = arr[i][0];
    const score = arr[i][1];
    string += `${name} ${score}${EOL}`;
  }
  fs.writeFileSync('./data/stats.txt', string);
}
// return fs.writeFileSync('./data/stats.txt', arr.join(EOL));;
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
