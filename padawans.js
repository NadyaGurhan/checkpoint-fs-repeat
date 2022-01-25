const { TestScheduler } = require("jest");
const fs = require("fs");

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  return fs.readFileSync("./data/padawans.txt", "utf8").split("\n").slice(0, 4);
}
//console.log(getPadawanNames())

function getLightsaberScores() {
  return fs
    .readFileSync("./data/scores.txt", "utf8")
    .split("\n")
    .map((el) => +el);
}

//console.log(getLightsaberScores())

function getStats() {
  let padNames = getPadawanNames();
  let padScores = getLightsaberScores();
  let result = [];

  for (let i = 0; i < padNames.length; i++) {
    result.push([padNames[i], padScores[i]]);
  }
  return result;
}
//console.log(getStats())
function writeStats() {
  let padNames = getPadawanNames();
  let padScores = getLightsaberScores();
  let result = [];

  for (let i = 0; i < padNames.length; i++) {
    result.push([padNames[i], padScores[i]]);

    console.log(result);
  }
  result = result.map((el) => el.join(" "));

  fs.writeFileSync("./data/stats.txt", result.join("\n"));
  return result;
}

console.log(writeStats());
