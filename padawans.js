const fs = require("fs");

const data = fs.readFileSync("data/padawans.txt", "utf8");
const res = data.split("\n");
const data1 = fs.readFileSync("data/padawans.txt", "utf8");
const res1 = data1.split("\n");
const res2 = res1.map((el) => Number(el)); //сделала все числом , отдает ошибку

function getPadawanNames() {
  console.log(res);
  return res;
}
getPadawanNames();

function getLightsaberScores() {
  console.log(res2);
  return res2;
}
getLightsaberScores();

function getStats() {
  let newArr = [];
  res;
  res2;
  for (let i = 0; i < res.length; i += 1) {
    newArr.push([res[i], res2[i]]);
    console.log(newArr);
  }
  return newArr;
}
getStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
