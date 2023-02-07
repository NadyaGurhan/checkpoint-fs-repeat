const fs = require("fs");

function getPadawanNames() {
  let filePath = "data/padawans.txt";
  let data = fs.readFileSync(filePath, "utf-8").split("\n");
  data.pop();
  return data;
}

function getLightsaberScores() {
  let filePath = "data/scores.txt";
  let data = fs
    .readFileSync(filePath, "utf-8")
    .split("\n")
    .map((el) => Number(el));
  return data;
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  let stat = [];
  for (let i = 0; i < names.length; i++) {
    let arr = [];
    arr.push(names[i], scores[i]);
    stat.push(arr);
  }
  return stat;
}

// console.log(getStats());
function writeStats() {
  let filePath = "data/stats.txt";
  fs.writeFileSync(filePath, data);
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
