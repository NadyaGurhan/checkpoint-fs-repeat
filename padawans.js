const fs = require("fs");
const padawans = fs.readFileSync("./data/padawans.txt", "utf8").split("\n");
if (!padawans[padawans.length - 1]) {
  padawans.pop();
}
const saberScores = fs.readFileSync("./data/scores.txt", "utf8").split("\n");


const getPadawanNames = (names) => {
  return padawans;
};
getPadawanNames();
const getLightsaberScores = (scores) => {
  const result = saberScores.map((el) => Number(el));
  return result;
};

const getStats = () => {
  const arrOfPadawans = getPadawanNames();
  const arrOfScores = getLightsaberScores();
  let table = [];
  for (let i = 0; i < arrOfPadawans.length; i++) {
    table.push([arrOfPadawans[i], arrOfScores[i]]);
  }
  return table;
};
getStats();

const writeStats = (stats) => {
  let stat = getStats();
  for (let i = 0; i < stat.length; i++) {
    if (stat[i+1]) {
          fs.appendFileSync("./data/stats.txt", `${stat[i][0]} ${stat[i][1]}\n`, "utf8");
    } else {
          fs.appendFileSync("./data/stats.txt", `${stat[i][0]} ${stat[i][1]}`, "utf8");
    }
  }
};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
