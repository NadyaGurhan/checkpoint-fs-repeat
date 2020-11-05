const fs = require("fs");

// const filename = require("./data/padawans.txt");

getPadawanNames = () => {
  let data = fs.readFileSync("./data/padawans.txt", "utf-8").split("\n");
  let newData = data.slice(0, data.length - 1);
  return newData;
};

getLightsaberScores = () => {
  let data = fs
    .readFileSync("data/scores.txt", "utf-8")
    .split("\n")
    .map((el) => {
      return Number(el);
    });
  return data;
};

getStats = () => {
  let padawans = getPadawanNames();
  let scores = getLightsaberScores();
  let resultAarr = [];
  for (let i = 0; i < 4; i++) {
    resultAarr.push([padawans[i], scores[i]]);
  }
  return resultAarr;
};

writeStats = () => {
  let fileOutput = getStats().join("\n").replace(/[\,]/g, " ");
  fs.writeFileSync("data/stats.txt", fileOutput);
};

writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
