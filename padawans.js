const fs = require("fs");

const padavans = fs
  .readFileSync("./data/padawans.txt", "utf8")
  .trim()
  .split("\n");
const scores = fs.readFileSync("./data/scores.txt", "utf8");

function getPadawanNames() {
  return padavans;
}

function getLightsaberScores() {
  const stringScores = scores.split("\n");
  const swordScores = [];
  for (let i = 0; i < stringScores.length; i++) {
    swordScores.push(Number(stringScores[i]));
  }
  return swordScores;
}

function getStats() {
  const padawans = getPadawanNames();
  const sabreScores = getLightsaberScores();

  return padawans.map((padawan, index) => [padawan, sabreScores[index]]);
}

function writeStats() {
  const regExp = /(,)/gim;
  const data = getStats().join("\n").replace(regExp, " ");
  // const newData = data.replace(regExp, " ");
  fs.writeFileSync("./data/stats.txt", data, "utf8");
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
