const fs = require("fs");
const filePath = "./data/padawans.txt";
const data = fs.readFileSync(filePath, "utf8");
const filePath2 = "./data/scores.txt";
const dataScores = fs.readFileSync(filePath2, "utf8");

// console.log(data.split("\n"));

const getPadawanNames = () => {
  const result = data.split("\n");
  result.pop();
  return result;
};

const getLightsaberScores = () => {
  const arr = dataScores.split("\n");
  const result = [];
  arr.map((el) => result.push(+el));
  return result;
};

const getStats = () => {
  let result = [];
  for (let i = 0; i < 4; i++) {
    result.push(getPadawanNames()[i]);
    result.push(getLightsaberScores()[i]);
  }
  return result;
};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
