const fs = require("fs");

let filePath = "./data/padawans.txt";
let data = fs.readFileSync(filePath, "utf8");
let filePath1 = "./data/scores.txt";
let data1 = fs.readFileSync(filePath1, "utf8");

function getPadawanNames() {
  return data.split("\n").slice(0, -1);
}

function getLightsaberScores() {
  res = [];
  let foo = data1.split("\n");
  for (i = 0; i < foo.length; i++) {
    res.push(Number(foo[i]));
  }
  return res;
}

function getStats() {
  let newArr = [];
  let newArr1 = [];
  let foo1 = data.split("\n");
  let foo2 = data1.split("\n");
  for (i = 0; i < foo1.length - 1; i++) {
    newArr1.push(foo1[i]);
    newArr1.push(foo2[i]);
    newArr.push(newArr1);
  }
  return newArr;
}

console.log(getStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
