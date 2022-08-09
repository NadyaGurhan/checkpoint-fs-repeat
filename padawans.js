const fs = require("fs");

const getPadawanNames = () => {
  const pad = fs.readFileSync("./data/padawans.txt", "utf-8").split("\n");
  pad.pop();
  return pad;
};
const getLightsaberScores = () => {
  const scores = fs.readFileSync("./data/scores.txt", "utf-8").split("\n");
  return scores.map((n) => Number(n));
};
const getStats = () => {
  const stats = [];
  const pad = getPadawanNames();
  const scores = getLightsaberScores();
  let temp = [];
  for (let i = 0; i < pad.length; i++) {
    temp.push(pad[i], scores[i]);
    stats.push(temp);
    temp = [];
  }
  return stats;
};
const writeStats = () => {
  let stats;
  stats = getStats();
  stats.map((pos) => pos.push("\n"));
  for (let i = 0; i < stats.length; i++) {
    stats[i] = stats[i].join(",");
  }
  stats.join(",");
  fs.writeFileSync("./data/stats.txt", `${stats}`);
  return stats;
};
console.log(writeStats());
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
