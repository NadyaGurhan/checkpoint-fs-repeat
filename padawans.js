const fs = require("fs");
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const names = fs.readFileSync("./data/padawans.txt", "utf-8");
  return names.split("\n").slice(0, -1);
}

function getLightsaberScores() {
  const scores = fs.readFileSync("./data/scores.txt", "utf-8").split("\n");
  return scores.map((el) => Number(el));
}

function getStats() {
  const name = getPadawanNames();
  const score = getLightsaberScores();
  const stats = [];
  for (let i = 0; i < name.length; i += 1) {
    const preArr = [];
    preArr.push(name[i], score[i]);
    stats.push(preArr);
  }
  return stats;
}

function writeStats() {
  const stats = getStats().join("\n").replaceAll(",", " ");
  if (!fs.existsSync("./data/stats.txt")) {
    fs.writeFileSync("./data/stats.txt", stats);
  }
}
