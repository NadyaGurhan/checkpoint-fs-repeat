const fs = require("fs");
const path = require("path");

function readData(file) {
  const data = fs
    .readFileSync(path.join(__dirname, "data", file), "utf-8")
    .split("\n");
  return data;
}

function getPadawanNames() {
  const pad = readData("padawans.txt").slice(0, -1);
  return pad;
}

function getLightsaberScores() {
  return readData("scores.txt").map((el) => Number(el));
}

function getStats() {
  const pad = getPadawanNames();
  const light = getLightsaberScores();
  const data = []
  for (let i = 0; i < pad.length; i++) {
    data.push([pad[i], light[i]])
  }
  return data;
}

function writeStats() {
  const data = getStats().map((el) => el.join(' ')).join('\n')
  fs.writeFileSync(path.join(__dirname, 'data', 'stats.txt'), data)
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
