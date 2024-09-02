const fs = require("fs");
const { EOL } = require("os");

function getPadawanNames() {
  const filePath = "./data/padawans.txt";
  const data = fs.readFileSync(filePath, "utf8");
  const result = data.split(EOL).slice(0, -1);
  return result;
}

function getLightsaberScores() {
  const filePath = "./data/scores.txt";
  const data = fs.readFileSync(filePath, "utf8");
  const allNumbers = data.split(EOL).map(Number);
  return allNumbers;
}

function getStats() {
  const names = getPadawanNames();
  const dates = getLightsaberScores();
  const result = [];
  for (let i = 0; i < names.length; i += 1) {
    result.push([names[i], dates[i]]);
  }
  return result;
}

function writeStats() {
  const result = getStats();
  const firstResults = result.map((i) => i.join(" "));
  const finalResults = firstResults.join("\n");
  fs.writeFileSync("./data/stats.txt", finalResults);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
