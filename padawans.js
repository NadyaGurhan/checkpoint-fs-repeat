const fs = require("fs");

function getPadawanNames() {
  return fs
    .readFileSync(`${__dirname}/data/padawans.txt`, "utf-8")
    .trim()
    .split("\r\n");
}
function getLightsaberScores() {
  return fs
    .readFileSync(`${__dirname}/data/scores.txt`, "utf-8")
    .trim()
    .split("\r\n")
    .map((el) => Number(el));
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  const stats = [];

  for (let i = 0; i < names.length; i++) {
    stats.push([names[i], scores[i]]);
  }
  return stats;
}
console.log(getStats().join("\r\n").replace(/,/g, " "));

function writeStats() {
  return fs.writeFileSync(
    `${__dirname}/data/stats.txt`,
    getStats().join("\n").replace(/,/g, " ")
  );
}
// writeStats();
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
