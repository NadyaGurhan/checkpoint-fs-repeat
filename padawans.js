const fs = require("fs");
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const data = fs.readFileSync("./data/padawans.txt", "utf8");
  const arr = data.split("\n");
  let resultArr = [];
  arr.forEach((el) => {
    if (el.length > 0) {
      resultArr.push(el);
    }
  });
  return resultArr;
}

function getLightsaberScores() {
  const data = fs.readFileSync("./data/scores.txt", "utf8");
  const arr = data.split("\n");
  const resultArr = [];

  arr.forEach((el) => {
    resultArr.push(Number(el));
  });

  return resultArr;
}

function getStats() {}

function writeStats() {}
