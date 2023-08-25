const fs = require("fs");

function getPadawanNames() {
  const names = fs.readFileSync("./data/padawans.txt", "utf-8").split("\r\n");
  const arr = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i] !== "") {
      arr.push(names[i]);
    } else {
      continue;
    }
  }
  return arr;
}
getPadawanNames();

function getLightsaberScores() {
  const names = fs.readFileSync("./data/scores.txt", "utf-8").split("\r\n");
  const arr = [];
  for (let i = 0; i < names.length; i++) {
    arr.push(Number(parseFloat(names[i]).toFixed(1)));
  }
  return arr;
}
getLightsaberScores();

function getStats() {
  const names = getPadawanNames();
  const stats = getLightsaberScores();
  let arr = [];
  for (let i = 0; i < names.length; i++) {
    arr.push([names[i], stats[i]]);
  }
  console.log(arr);
  return arr;
}
getStats();

function writeStats() {
  const text = getStats();
  const text2 = text.join("\n").replace(/,/g, " ");
  fs.writeFileSync("./data/stats.txt", text2);
}
writeStats();
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
