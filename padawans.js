const fs = require("fs");

function getPadawanNames() {
  const newArr = fs
    .readFileSync("./data/padawans.txt", { encoding: "utf8", flag: "r" })
    .split("\n");
  newArr.pop();
  return newArr;
}

function getLightsaberScores() {
  const newArr = fs
    .readFileSync("./data/scores.txt", { encoding: "utf8", flag: "r" })
    .split("\n");
  return newArr.map((el) => Number(el));
}

function getStats() {
  const padawansArr = getPadawanNames();
  const scoresArr = getLightsaberScores();
  const result = [];
  for (let i = 0; i < padawansArr.length; i++) {
    result.push(`${padawansArr[i]},${scoresArr[i]}`);
  }

  const splited = result.map((el) => el.split(","));

  newArr = splited.map(([str, number]) => [str, Number(number)])

  return newArr;
}

const resultData = getStats();

function writeStats(resultData) {
  fs.writeFileSync("./data/stats.txt", resultData.join("\n").replace(/,/g, " "));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
