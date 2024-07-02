const fs = require("fs");
const os = require("os");

function getPadawanNames() {
  const padawanNames = [
    ...fs.readFileSync("./data/padawans.txt", "utf-8").split(`${os.EOL}`),
  ];
  return padawanNames;
}

function getLightsaberScores() {
  const lightsaberScoresStr = [
    ...fs.readFileSync("./data/scores.txt", "utf-8").split(`${os.EOL}`),
  ];
  const lightsaberScores = lightsaberScoresStr.map((el) => Number(el));
  return lightsaberScores;
}

function getStats() {
  const padawanNamesArr = getPadawanNames();
  const lightsaberScoresArr = getLightsaberScores();

  const table = [];
  for (let i = 0; i < padawanNamesArr.length; i++) {
    table.push([padawanNamesArr[i], lightsaberScoresArr[i]]);
  }
  return table;
}

function writeStats(getStats) {
  const data = getStats.join(`${os.EOL}`).replaceAll(",", " ");
  fs.writeFileSync("./data/stats.txt", data);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
