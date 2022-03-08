const fs = require('fs');
const padawans = fs.readFileSync("./data/padawans.txt", "utf-8");
const scores = fs.readFileSync("data/scores.txt", "utf-8");

function getPadawanNames() {
  const padawan = padawans.split('\n');
  padawan.pop();
  return padawan;
}

// console.log(getPadawanNames())

function getLightsaberScores() {
  return scores.split('\n').map((element) => element * 1);
}

function getStats() {
  const stats = [];
  for (let i = 0; i < getPadawanNames().length; i++) {
    stats.push([getPadawanNames()[i], getLightsaberScores()[i]]);
  }
  return stats;
}
// console.log(getStats());

function writeStats() {
  const result = getStats().map((el) => el = `${el[0]} ${el[1]}`);
  // console.log(result);
  const final = result.join('\n');
  // console.log(final);
  return final;
}
writeStats()

fs.writeFileSync('data/stats.txt', writeStats());


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
