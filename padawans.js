const fs = require("fs");
const padawans = fs
  .readFileSync(`${__dirname}/data/padawans.txt`, "utf8")
  .split("\r\n");
const scores = fs
  .readFileSync(`${__dirname}/data/scores.txt`, "utf8")
  .split("\r\n");
const getPadawanNames = () => padawans.slice(0, -1);
const getLightsaberScores = () => scores.map((el) => +el);
const getStats = () => {
  const newArray = [];
  for (let i = 0; i < padawans.length - 1; i++) {
    newArray.push([getPadawanNames()[i], getLightsaberScores()[i]]);
  }
  return newArray;
};
const writeStats = (stats) => {
  stats = stats.join("\n").split(",").join(" ");
  fs.writeFileSync(`${__dirname}/data/stats.txt`, stats, "utf8");
};
console.log(writeStats(getStats()));
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
