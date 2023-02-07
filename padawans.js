const fs = require("fs");
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};

const text = fs.readFileSync(__dirname + "/data/padawans.txt", "utf8");
const textAr = text.split("\n");
const text2 = fs.readFileSync(__dirname + "/data/scores.txt", "utf8");
const textAr2 = text2.split("\n");

function getPadawanNames() {
  const arr = [];
  textAr.forEach((element) => {
    arr.push(element);
  });
  return arr;
}

function getLightsaberScores() {
  const arr = [];
  textAr2.forEach((n) => {
    arr.push(Number(n));
  });
  return arr;
}
