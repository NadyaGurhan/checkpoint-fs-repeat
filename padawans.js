const fs = require("fs");

const getPadawanNames = () => {
  const names = fs
    .readFileSync("./data/padawans.txt", "utf-8")
    .trim()
    .split("\n");
  return names;
};

const getLightsaberScores = () => {
  const scores = fs
    .readFileSync("./data/scores.txt", "utf-8")
    .trim()
    .split("\n")
    .map(Number);
  return scores;
};

const getStats = () => {
  let namesRes = getPadawanNames();
  let scoresRes = getLightsaberScores();
  const newArr = [];
  for (let i = 0; i < namesRes.length; i += 1) {
    newArr.push([namesRes[i], scoresRes[i]]);
  }
  return newArr;
};

const writeStats = () => {
  const stats = getStats().join("\n");
  let newStr = "";
  for (let i = 0; i < stats.length; i += 1) {
    if (stats[i] === ",") {
      newStr += " ";
    } else if (stats[i] != ",") {
      newStr += stats[i];
      newStr;
    }
  }

  fs.writeFileSync("./data/stats.txt", newStr);
};

writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
