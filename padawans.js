const fs = require("fs");
let padavans = fs.readFileSync("./data/padawans.txt", "utf-8");
let scores = fs.readFileSync("./data/scores.txt", "utf-8");

const getPadawanNames = () => {
  let result = padavans.split("\r\n");
  return result;
};
// console.log(getPadawanNames());

const getLightsaberScores = () => {
  let res = scores.split("\r\n").map((el) => el * 1);
  return res;
};

//  console.log(getLightsaberScores())

const getStats = () => {
  let res = [];
  let resArr = [];
  let resultName = scores.split("\r\n").map((el) => el * 1);
  let result = padavans.split("\r\n");
  for (let i = 0; i < resultName.length; i += 1) {
    res = [result[i]];
    res.push(resultName[i]);
    resArr.push(res);
  }
  return resArr;
};

// console.log(getStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
