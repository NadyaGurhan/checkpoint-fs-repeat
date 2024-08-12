const fs = require('fs');

const getPadawanNames = () => {
  const result = fs.readFileSync("./data/padawans.txt", "utf-8").trim().split("\r\n");
  return result;
};

const getLightsaberScores = () => {
  const res = fs.readFileSync("./data/scores.txt", "utf-8").split('\r\n').map(el => parseFloat(el));
  return res;
}

const getStats = () => {
  const names = getPadawanNames()
  const score = getLightsaberScores()
  return names.map((el, i) => [el, score[i]]);
}

const writeStats = () => {
  const result = getStats()
  const res = result.map(([names, score]) => `${names} ${score}`).join("\n")
  fs.writeFileSync("./data/stats.txt", res)
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
