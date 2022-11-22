const fs = require("fs");

const path = require("path");

function getPadawanNames() {
  const filePath = path.resolve(__dirname, "data", "padawans.txt");
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const padawans = fileContent.trim().split("\n");
  return padawans;
}

function getLightsaberScores() {
  const filePath = path.resolve(__dirname, "data", "scores.txt");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const score = fileContent.trim().split("\n");
  let rez = score.map((el) => Number(el));
  return rez;
}
getLightsaberScores();
function getStats() {
  const filePadawans = path.resolve(__dirname, "data", "padawans.txt");
  const filePadaContent = fs.readFileSync(filePadawans, "utf-8");
  const fileScores = path.resolve(__dirname, "data", "scores.txt");
  const fileScorContent = fs.readFileSync(fileScores, "utf-8");
  const padawans = filePadaContent.trim().split("\n");
  const score = fileScorContent.trim().split("\n");

  console.log(padawans);
  console.log(score);
  return padawans;
}
getStats();

function writeStats() {}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
