const fs = require("fs");

const getPadawanNames = () => {
  const filePath = "./data/padawans.txt";
  const data = fs.readFileSync(filePath, "utf8");
  const array = data.split("\n");
  array.pop();
  return array;
};

const getLightsaberScores = () => {
  const filePathScores = "./data/scores.txt";
  const data = fs.readFileSync(filePathScores, "utf8");
  const array = data.split("\n").map((el) => Number(el));
  return array;
};

const getStats = () => {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  let result = [];
  for (let i = 0; i < names.length; i++) {
    result.push([names[i], scores[i]]);
  }
  return result;
};

const writeStats = () => {
  const pathWrite = 'data/stats.txt';
  const writeText = getStats().join("\n" ,).replaceAll(",", " ")
  fs.writeFileSync(pathWrite, writeText);
};

writeStats()
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
