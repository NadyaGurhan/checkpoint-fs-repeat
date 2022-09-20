const fs = require("fs");

function getPadawanNames() {
  const data = fs
    .readFileSync(__dirname + "/data/padawans.txt", "utf-8")
    .split("\n");

  return data.slice(0, data.length - 1);
}

function getLightsaberScores() {
  const data = fs
    .readFileSync(__dirname + "/data/scores.txt", "utf-8")
    .split("\n");

  return data.map((el) => Number(el));
}

function getStats() {
  const pad = getPadawanNames();
  const stat = getLightsaberScores();

  let result = [];
  for (let i = 0; i < 4; i++) {
    let temp = [];
    temp.push(`${pad[i]}`);
    temp.push(stat[i]);
    result.push(temp);
  }
  return result;
}

getStats();

function writeStats() {
  let data = getStats();
  data.map((el) => fs.appendFileSync("./data/stats.txt", `${el}\n`));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
