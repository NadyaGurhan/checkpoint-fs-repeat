const fs = require("fs");
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const getPadawanNames = fs.readFileSync("./data/padawans.txt");
function padawanNames() {
  const arr = [];
  fs.readFileSync("./data/padawans.txt", "utf-8");
  for (let i = 0; i < getPadawanNames.length; i++) {
    arr.push(padawanNames[i]);
  }
  return arr;
}
const names = getLightsaberScores();

function lightsaberScores() {
  const arr = [];
  fs.readFileSync("./data/scores.txt", "utf-8");
  for (let i = 0; i < getLightsaberScores.length; i++) {
    arr.push(lightsaberScores[i]);
  }
  return arr;
}

// function getStats(name, scores) {
//   const stats = [];
//   for (let i = 0; i < scores; i++) {}
// }

// function getStats() {
//   return fs.writeFileSync("./data/");
// }
