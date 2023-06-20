const fs = require("fs");

module.exports = {
  getPadawanNames,
  getLightsaberScores,
};

function getPadawanNames() {
  let filePath1 = "./data/padawans.txt";
  let data1 = fs.readFileSync(filePath1, "utf8");
  let arr1 = [data1];
  return arr1;
}

function getLightsaberScores() {
  let filePath2 = "./data/scores.txt";
  let data2 = fs.readFileSync(filePath2, "utf8");
  let arr2 = [data2];
  return arr2;
}
console.log(getPadawanNames());
console.log(getLightsaberScores());
