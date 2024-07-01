const fs = require("fs");
const os = require("os");

function getPadawanNames() {
  return fs
    .readFileSync("./data/padawans.txt", "utf-8")
    .split("\n")
    .filter((word) => word);
}

function getLightsaberScores() {
  return fs
    .readFileSync("./data/scores.txt", "utf-8")
    .split("\n")
    .map((char) => Number(char));
}

function getStats() {
  const PadArr = getPadawanNames();
  const LightArr = getLightsaberScores();
  const stats = [];

  for (let i = 0; i < PadArr.length; i++) {
    const tempArr = [];
    tempArr.push(PadArr[i]);
    tempArr.push(LightArr[i]);

    stats.push(tempArr);
  }

  return stats;
}

function writeStats() {
  const toWrite = getStats();
  fs.writeFileSync("./data/stats.txt", "");

  for (let i = 0; i < toWrite.length; i++) {
    if (i === toWrite.length - 1) {
      fs.appendFileSync(
        "./data/stats.txt",
        `${toWrite[i][0]} ${toWrite[i][1]}`
      );
      return;
    }
    fs.appendFileSync(
      "./data/stats.txt",
      `${toWrite[i][0]} ${toWrite[i][1]}${os.EOL}`
    );
  }
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

