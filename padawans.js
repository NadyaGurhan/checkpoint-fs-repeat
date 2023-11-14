const fs = require("fs");

function getPadawanNames() {
  const getNames = fs.readFileSync("data/padawans.txt", "utf-8");
  const arrNames = getNames.split("\n").filter((el) => el.length > 0);
  return arrNames;
}

function getLightsaberScores() {
  const getScore = fs.readFileSync("data/scores.txt", "utf-8");
  const arrScore = getScore
    .split("\n")
    // .filter((el) => el.length > 0)
    .map((el) => Number(el)); // на фильтр не смотрите я тут так просто смотрел че как
  return arrScore;
}

function getStats() {
  // const nameStats = arrNames.map((el, index) => [el, arrScore[index]]);
  // const nameStats = [];
  // for (let i = 0; i < array.length; i++) {
  //   nameStats.push(arrNames[i]).push(arrScore[i]);
  // }
  // const nameStats = arrNames.reduce((acc, curr, index) => {
  //   acc.push([curr, arrScore[index]]);
  //   return acc;
  // }, []);
  return nameStats;
}

function writeStats() {
  const abobi = fs.writeFileSync("data/stats.txt", nameStats, "utf-8");
  return abobi;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
