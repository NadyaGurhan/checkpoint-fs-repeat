const fs = require("fs");


function getPadawanNames() {
  const data = fs.readFileSync("./data/padawans.txt", "utf-8");
  return data.split("\r\n").slice(0, -1);
}

function getLightsaberScores() {
  const arr = [];
  const data = fs.readFileSync("data/scores.txt", "utf-8");
  arr.push(data);
  return arr;
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};