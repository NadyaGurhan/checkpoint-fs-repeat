//
const fs = require("fs");

// const getPadawanNames, getLightsaberScores;

const getPadawanNames = function () {
  const names = fs.readFileSync("./padawans.txt", "utf-8").split("\n");
  return names;
};

const getLightsaberScores = function () {
  const scores = fs.readFileSync("./scores.txt", "utf-8").split("\n");
  return scores;
};

const getStats = function () {
  const names = fs.readFileSync("./padawans.txt", "utf-8").split("\n");
  const scores = fs.readFileSync("./scores.txt", "utf-8").split("\n");
  const stats = {};
  //for each first el of names give first elem of scores and save file into a new file
};

const writeStats = function () {
  // SNOT FINISHED
  const data = getStats.map((el) => Object.values(el)).join("\n");
  return fs.writeFileSync(getStats);
};

const dataText = new PersonParser();

// getLightsaberScores("./scores.txt");
//

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
