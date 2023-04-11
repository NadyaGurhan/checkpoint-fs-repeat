const fs = require("fs");

const padawans = fs
  .readFileSync(`${__dirname}/data/padawans.txt`, "utf8")
  .split("\r\n");
const scores = fs
  .readFileSync(`${__dirname}/data/scores.txt`, "utf8")
  .split("\r\n");
const getPadawanNames = () => padawans;
const getLightsaberScores = () => scores.map((el) => +el);
const getStats = () => {
  const array = [];
  for (let i = 0; i < padawans.length; i += 1) {
    for (let j = 0; j < scores.length; j += 1) {}
    array.push([padawans[i], scores.map((el) => +el)[i]]);
  }
  return array;
};
const writeStats = (stats) => {
  stats = stats.join("\n").split(",").join(" ");
  fs.writeFileSync(`${__dirname}/data/stats.txt`, stats, "utf8");
};
writeStats(getStats());
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
