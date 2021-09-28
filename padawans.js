const fs = require("fs");
const padawans = fs.readFileSync("./data/padawans.txt", "utf8");
const scores = fs.readFileSync("./data/scores.txt", "utf8");

// padawans.split("\n");
// console.log(padawans.split("\n").pop());
const getPadawanNames = () => {
  let result = padawans.split("\n");
  result.pop();
  return result;
};
const getLightsaberScores = () => {
  let result = scores.split("\n").map((el) => Number(el));
  return result;
};
const getStats = () => {
  let result = [];
  let padawans = getPadawanNames();
  let scores = getLightsaberScores();
  for (let i = 0; i < padawans.length; i++) {
    result.push([padawans[i], scores[i]]);
  }
  return result;
};

const writeStats = () => {
  let result = getStats();
  let write = result.join("\n");
  fs.writeFileSync("./data/stats.txt", write.replace(/,/gm, " "));
};
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
console.log(getStats());
