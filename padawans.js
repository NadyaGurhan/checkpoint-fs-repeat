const fs = require("fs");
//const { EOL } = require("os");

function getPadawanNames() {
  const readPadawan = fs.readFileSync(
    `${__dirname}/data/padawans.txt`,
    "utf-8"
  );
  const arrayReadPadawan = readPadawan.split("\n");
  return arrayReadPadawan.filter((e) => e !== "");
}
//console.log(getPadawanNames());

function getLightsaberScores() {
  const readScores = fs.readFileSync(`${__dirname}/data/scores.txt`, "utf-8");
  const arrayReadScores = readScores.split("\n").map((el) => Number(el));
  return arrayReadScores;
}
//console.log(getLightsaberScores());

function getStats() {
  const arrayReadPadawan = getPadawanNames();
  const arrayReadScores = getLightsaberScores();
  const stats = arrayReadPadawan.map((el, i) => [el, arrayReadScores[i]]);
  return stats;
}
// console.log(getStats());

function writeStats() {
  const arrayStats = getStats();
  arrayStats.map((el) => {
    if (!fs.existsSync(`${__dirname}/data/stats.txt`)) {
      fs.writeFileSync(`${__dirname}/data/stats.txt`, `${el[0]} ${el[1]}`);
    } else {
      fs.appendFileSync(`${__dirname}/data/stats.txt`, `\n${el[0]} ${el[1]}`);
    }
  });
}

// console.log(writeStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
