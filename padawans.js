const fs = require("fs");

function getPadawanNames() {
  const data = fs.readFileSync("./data/padawans.txt", "utf-8");
  console.log(data);
  return data.split("\n").filter((el) => el !== "");
}

function getLightsaberScores() {
  const data = fs.readFileSync("./data/scores.txt", "utf-8");
  const arr = data.split("\n");
  return arr.map((el) => Number(el));
}
console.log(getLightsaberScores());

function getStats() {
  let arr = [];
  const dataNames = fs.readFileSync("./data/padawans.txt", "utf-8");
  const dataNamesArr = dataNames.split("\n").filter((el) => el !== "");
  const dataScores = fs.readFileSync("./data/scores.txt", "utf-8");
  const dataScoresArr = dataScores.split("\n").map((el) => Number(el));

  for (let i = 0; i < dataNamesArr.length; i++) {
    for (let j = 0; j < dataScoresArr.length; j++) {
      arr.push([dataNamesArr[i], dataScoresArr[j]]);
    }
  }
  console.log(arr);
  // return arr;
}

console.log(getLightsaberScores());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
