const fs = require("fs");

function getPadawanNames() {
  return fs
    .readFileSync("./data/padawans.txt", "utf8")
    .split("\n")
    .splice(0, 4);
}

function getLightsaberScores() {
  return fs
    .readFileSync("./data/scores.txt", "utf8")
    .split("\n")
    .map((el) => +el);
}

function getStats() {
  let padScores = fs
    .readFileSync("./data/scores.txt", "utf8")
    .split("\n")
    .map((el) => +el);

  let padNames = fs
    .readFileSync("./data/padawans.txt", "utf8")
    .split("\n")
    .splice(0, 4);

  let result = [];

  for (let i = 0; i < padNames.length; i++) {
    result.push([padNames[i], padScores[i]]);
  }

  console.log(padNames);
  console.log(padScores);
  console.log(result);

  fs.writeFileSync("./data/stats.txt", result.toString());

  return result;
}

// getStats();

function writeStats() {
  let padScores = fs
    .readFileSync("./data/scores.txt", "utf8")
    .split("\n")
    .map((el) => +el);

  let padNames = fs
    .readFileSync("./data/padawans.txt", "utf8")
    .split("\n")
    .splice(0, 4);

  let result = [];

  for (let i = 0; i < padNames.length; i++) {
    result.push([padNames[i], padScores[i]]);
  }

  console.log(padNames);
  console.log(padScores);
  console.log(result);

  result = result.map((el) => el.join(" "));

  console.log(result);

  fs.writeFileSync("./data/stats.txt", result.join("\n"));

  return result;
}

writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
