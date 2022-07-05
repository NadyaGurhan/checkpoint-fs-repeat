const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  // let arr = [];
  let padawansNames = fs.readFileSync("./data/padawans.txt", "utf-8");
  let arr = padawansNames.split('\n');
  // padawansNames.split('\n');
  // arr.push(padawansNames);
  return arr;
}
console.log(getPadawanNames())
let gPN = getPadawanNames();

function getLightsaberScores() {
  // let arr = [];
  let lsScores = fs.readFileSync("./data/scores.txt", "utf-8");
  let arr = lsScores.split('\n');
  // lsScores.split('\n');
  // arr.push(lsScores);
  return arr;
}
console.log(getLightsaberScores())
let gLS = getLightsaberScores();

function getStats() {
  let result = gPN.map((element, index) => `${element}, ${gLS[index]}`);
  return result
}
console.log(getStats());
let a = getStats();

function writeStats() {
  let stats = fs.writeFileSync(`./data/stats.txt`, `${a}`, a.join('\n'), "utf-8")
}
console.log(writeStats());