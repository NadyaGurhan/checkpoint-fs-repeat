const fs = require("fs");
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
const output = fs.readFileSync("data/padawans.txt", "utf8");
const data = output.split("\n");

function getPadawanNames() {
  const data = output.split("\n");
  return data;
}

//
const outputik = fs.readFileSync("data/scores.txt", "utf8");
const datik = outputik.split("\n").map((el) => Number(el));

function getLightsaberScores() {
  const datik = outputik.split("\n").map((el) => Number(el));
  return datik;
}

function getStats() {
  const data = output.split("\n");
  const datik = outputik.split("\n").map((el) => Number(el));
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    arr.push(data[i], datik[0]).map();
  }
  return arr;
}
console.log(getStats());

function writeStats() {
  const datikk = getStats();
  const filePath = "data/stats.txt";
  fs.writeFileSync(filePath, data.join("\n"));
}
// console.log(writeStats());
