const fs = require("fs");
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
function getPadawanNames() {
  const arrNames = fs.readFileSync(`./data/padawans.txt`, "utf8");
  const names = arrNames.trim().split("\n");
  return names;
}
function getLightsaberScores() {
  const arrScores = fs.readFileSync(`./data/scores.txt`, "utf8");

  let scores = arrScores.split("\n");
  // scores = [];
  let x = [];
  for (let i = 0; i < scores.length; i++) {
    x.push(+scores[i]);
  }

  return x;
}

function getStats() {
  const padawan = getPadawanNames();
  const saberScores = getLightsaberScores();
  const result = [];
  for (let i = 0; i < 4; i++) {
    result.push([padawan[i], saberScores[i]]);
  }
  return result;
}
function writeStats() {
  const padawan = getPadawanNames();
  const saberScores = getLightsaberScores();
  let result = "";
  for (let i = 0; i < 4; i++) {
    // if (i <= 2) {
    //   result += `${padawan[i]} ${saberScores[i]}\n`;
    // } else {
    //   result += `${padawan[i]} ${saberScores[i]}`;
    // }
    i <= 2
      ? (result += `${padawan[i]} ${saberScores[i]}\n`)
      : (result += `${padawan[i]} ${saberScores[i]}`);
  }
  fs.writeFileSync("./data/stats.txt", result, "utf8");
}
