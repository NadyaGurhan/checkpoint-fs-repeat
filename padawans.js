const fs = require('fs');

function getPadawanNames() {
  const text = fs.readFileSync('./data/padawans.txt', 'utf-8')
  .split('\n')
  .filter(el => el.length > 0);
  return text; 
}

// console.log(getPadawanNames())

function getLightsaberScores() {
  const text = fs.readFileSync('./data/scores.txt', 'utf-8')
  .split('\n')
  .map(Number);
  return text; 
}

function getStats() {
  array = [];
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  for (let i=0; i<padawans.length; i++) {
    array.push([padawans[i], scores[i]]);
  }
  return array;
}

function writeStats(arr) {
  fs.writeFileSync(
    "./data/stats.txt",
    arr.map((el) => el.join(" ")).join("\n"),
    "utf-8"
  );
}

writeStats(getStats())
// console.log(getStats())


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
