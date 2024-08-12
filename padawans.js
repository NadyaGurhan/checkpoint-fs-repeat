const fs = require("fs");
const { EOL } = require("os");

function getPadawanNames() {
  const padawans = "./data/padawans.txt";
  return fs
    .readFileSync(padawans, "utf-8")
    .split(`${EOL}`)
    .filter((x) => x !== "");
}

function getLightsaberScores() {
  const lightScores = "./data/scores.txt";
  return fs
    .readFileSync(lightScores, "utf-8")
    .split(`${EOL}`)
    .filter((x) => x !== "")
    .map((x) => (x = Number(x)));
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  const padawanScore = [];
  for (let i = 0; i < padawans.length; i++) {
    padawanScore.push([padawans[i], scores[i]]);
  }
  return padawanScore;
}

function writeStats() {
  const status = getStats();
  // fs.writeFileSync("./data/stats.txt", "");
  status.forEach((el, i) => {
    console.log(el);

    fs.appendFileSync(
      "./data/stats.txt",
      el.join(" ") + (i === status.length - 1 ? "" : "\n")
    );
  });
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
