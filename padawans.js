const fs = require("fs");

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
function getPadawanNames() {
  const podav = fs
    .readFileSync("./data/padawans.txt", "utf-8")
    .trim()
    .split("\n");
  // console.log(podav);
  return podav;
}
function getLightsaberScores() {
  const getLi = fs
    .readFileSync("./data/scores.txt", "utf-8")
    .split("\n")
    .map((el) => Number(el));

  // getLi = Number(getLi);
  // console.log(getLi);
  return getLi;
}
function getStats() {
  const podav = getPadawanNames();
  const getLi = getLightsaberScores();
  const stat = podav.map((el, index) => [podav[index], getLi[index]]);
  console.log(stat);
  return stat;
}

function writeStats() {
  // const wrS = getStats();

  const wr = fs.writeFileSync("data/stats.txt", stat);

  console.log(wr);
  return wr;
}
