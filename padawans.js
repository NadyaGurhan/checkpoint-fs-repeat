const fs = require("fs");
const { EOL } = require("os");

function getPadawanNames() {
  return fs.readFileSync("./data/padawans.txt", "utf-8").split(EOL);
}

function getLightsaberScores() {
  return fs
    .readFileSync("./data/scores.txt", "utf-8")
    .split(EOL)
    .map((i) => Number(i));
}

function getStats() {
  let names = getPadawanNames();
  let scores = getLightsaberScores();
  return names.map((el, i) => [names[i], scores[i]]);
}

function writeStats() {
  let stats = getStats();
  stats.forEach((el) => {
    if (!fs.existsSync("./data/stats.txt")) {
      fs.writeFileSync("./data/stats.txt", `${el[0]} ${el[1]}`);
    } else {
      fs.appendFileSync("./data/stats.txt", `\n${el[0]} ${el[1]}`);
    }
  });
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
