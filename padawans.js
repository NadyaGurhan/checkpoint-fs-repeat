const fs = require("fs");

const getPadawanNames = () => {
  let filePath = "./data/padawans.txt";
  let data = fs.readFileSync(filePath, "utf8");

  let array = data.split("\r\n");
  array.pop();
  return array;
};

const getLightsaberScores = () => {
  let pathName = "./data/scores.txt";
  let data = fs.readFileSync(pathName, "utf8");
  let array = data.split("\r\n");
  let arrayWithNumbers = array.map((el) => +el);
  return arrayWithNumbers;
};

const getStats = () => {
  const arrayOfNames = getPadawanNames();
  const arrayOfScores = getLightsaberScores();
  const result = [];
  for (let i = 0; i < arrayOfNames.length; i++) {
    result.push([arrayOfNames[i], arrayOfScores[i]]);
  }
  return result;
};

const writeStats = (stats) => {
  const file = fs.writeFileSync(
    "./data/stats.txt",
    stats.join("\n").replaceAll(",", " ")
  );
};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
