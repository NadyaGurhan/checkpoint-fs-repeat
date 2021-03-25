const fs = require("fs");
function getPadawanNames() {
  return fs.readFileSync("./data/padawans.txt", "utf8").trim().split("\n");
}

function getLightsaberScores() {
  return fs
    .readFileSync("./data/scores.txt", "utf8")
    .trim()
    .split("\n")
    .map((el) => +el);
}
function getStats() {
  let getPadawan = getPadawanNames();
  let getLightsaber = getLightsaberScores();
  return getPadawan.map((newPadawan, i) => [newPadawan, getLightsaber[i]]);
}
const writeStats = () => {
  const data = getStats();
  fs.writeFileSync(
    "./data/stats.txt",
    data.map((i) => i.join(" ")).join("\n")
  );
};
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
