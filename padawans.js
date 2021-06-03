const fs = require("fs");
function getPadawanNames() {
  let data = fs.readFileSync("./data/padawans.txt", "UTF-8");
  let arrData = data.split("\n");
  arrData.pop();
  return arrData;
}

function getLightsaberScores() {
  let data = fs.readFileSync("./data/scores.txt", "UTF-8");
  let arrData = data.split("\n");

  for (let i = 0; i < arrData.length; i++) {
    arrData[i] = Number(arrData[i]);
  }
  return arrData;
}

function getStats() {
  let arrStats = [];
  let arrNames = getPadawanNames();
  let arrScore = getLightsaberScores();
  for (let i = 0; i < arrNames.length; i++) {
    let arr = [];
    arr.push(arrNames[i], arrScore[i]);
    arrStats[i] = arr;
  }
  return arrStats;
}

function writeStats(stats) {
  let arrData = stats();

  for (let i = 0; i < arrData.length; i++) {
    let data = "";
    data = arrData[i].toString();
    data += "\n";

    fs.appendFileSync("./data/stats.txt", data);
  }
}
writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
