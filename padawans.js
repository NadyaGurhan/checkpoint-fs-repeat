const fs = require("fs");
const padawans = fs.readFileSync("./data/padawans.txt", "utf8").split("\n");
const saberScores = fs.readFileSync("./data/scores.txt", "utf8").split("\n");

const getPadawanNames = (names) => {
  const result = padawans;
  result.pop();
  return result;
}

const getLightsaberScores = (scores) => {
  const result = saberScores.map((el) => el * 1);
  return result;
}


const getStats = (stats) => {

}

const writeStats = (stats) => {

}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
