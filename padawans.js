const fs = require("fs");

const getPadawanNames = () => {
  const str = fs.readFileSync("./data/padawans.txt", "utf8");

  return str.split("\n").slice(0, -1);
};

const getLightsaberScores = () => {
  const str = fs.readFileSync("./data/scores.txt", "utf8");

  return str.split("\n");
};

const getStats = () => {
  const arr1 = getPadawanNames();
  const arr2 = getLightsaberScores();
  let res = [];

  for (let i = 0; i < arr1.length; i++) {
    let container = [];
    container.push(arr1[i]);
    container.push(arr2[i]);
    res.push(container);
  }
  return res;
};

const writeStats = () => {
  fs.writeFileSync(".data/stats.txt", getStats(), "utf8");
};

console.log(getStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
