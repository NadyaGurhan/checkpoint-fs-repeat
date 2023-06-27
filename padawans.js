const fs = require("fs");

const padawans = fs.readFileSync("./data/padawans.txt", "utf-8");
const scores = fs.readFileSync("./data/scores.txt", "utf-8");

const getPadawanNames = () => padawans.split('\n').slice(0, -1);
console.log(getPadawanNames())
const getLightsaberScores = () => scores.trim().split("\n").map((el) => +el);

const getStats = () => {}

const writeStats = () => {
  fs.writeFileSync(`./data/stats.txt`,`${getStats}`,"utf8");
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  writeStats,
};
