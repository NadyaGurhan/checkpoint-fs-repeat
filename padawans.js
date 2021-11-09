const fs = require("fs");

function getArrayFromText(filePath) {
  let padawans = fs
    .readFileSync(__dirname + `${filePath}`, "utf-8")
    .trim()
    .split("\n");
  return padawans;
}
function newFile(filePath, content) {
  fs.writeFileSync(`${__dirname}${filePath}.txt`, `${content}`, (err) => {
    if (err) console.log(err);
  });
}

function getPadawanNames() {
  return getArrayFromText("/data/padawans.txt");
}
function getLightsaberScores() {
  let sabers = getArrayFromText("/data/scores.txt");
  return sabers.map((e) => parseFloat(e));
}
function getStats() {
  let padawansWithStats = new Array(0);
  let stats = getPadawanNames();
  let sabers = getLightsaberScores();
  stats.forEach((element, index) => {
    padawansWithStats[index] = stats[index].split(",");
    padawansWithStats[index].push(sabers[index]);
  });
  return padawansWithStats;
}

function writeStats() {
  let temp = getStats().join("\n").replace(/\,/g, " ");
  return newFile("/data/stats", temp);
}
writeStats();
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
