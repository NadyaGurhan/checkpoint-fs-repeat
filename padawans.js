const fs = require('fs');

function getPadawanNames() {
  let padawansNames = fs.readFileSync(`./data/padawans.txt`, `utf8`).split('\n');
  padawansNames.length = 4;
  return padawansNames;
}

function getLightsaberScores() {
  let lightsaberScores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');
  lightsaberScores.length = 4;
  for (let i = 0; i < lightsaberScores.length; i++) {
    lightsaberScores[i] = +lightsaberScores[i];
  }
  return lightsaberScores;
}

const padawans = getPadawanNames();
const scores = getLightsaberScores();

function getStats(a = padawans, b = scores) {
  const arr = [];
  for (let i = 0; i < a.length; i++) {
    arr.push([a[i], b[i]]);
  }
  return arr;
}

const stats = getStats();

function writeStats(a = stats) {
  for (let i = 0; i < a.length; i++) {
    let arr = [];
    let arr2 = a[i].join(` `);
    arr.push(arr2[i])
  }
  return arr.join('\n');
}
let result = writeStats();
fs.writeFileSync('./data/stats.txt', result);

console.log(getPadawanNames());
console.log(getLightsaberScores());
console.log(getStats());
console.log(writeStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
