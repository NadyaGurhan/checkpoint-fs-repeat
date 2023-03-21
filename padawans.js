const fs = require("fs");
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const data = fs.readFileSync("./data/padawans.txt", "utf-8");
  const name = data.split("\n").slice(0, -1);
  return name;
}

function getLightsaberScores() {
  const data = fs
    .readFileSync("./data/scores.txt", "utf-8")
    .split("\n")
    .map((el) => +el);
  return data;
}

function getStats() {
  const names = getPadawanNames();
  const stats = getLightsaberScores();
  const arr = [];
  const newArr = [];
  for (let i = 0; i < names.length; i++) {
    arr.push(names[i], stats[i]);
  }
  for (let i = 0; i < arr.length; i += 2) {
    newArr.push([arr[i], arr[i + 1]]);
  }
  return newArr;
}
function writeStats() {
  const data = getStats().join("");
  return fs.writeFileSync("./data/stats.txt", data, "utf-8");
}
