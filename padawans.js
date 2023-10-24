const fs = require("fs");
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const fileName = "./data/padawans.txt";
  const namesPadavan = fs.readFileSync(fileName, "utf8");
  return namesPadavan.split("\n").slice(0, -1);
}

function getLightsaberScores() {
  const fileName = "./data/scores.txt";
  const scorePadavan = fs.readFileSync(fileName, "utf8");
  return scorePadavan.split("\n").map((el) => +el);
}

function getStats() {
  const name = getPadawanNames();
  const score = getLightsaberScores();
  let arr = [];
  const result = [];
  for (let i = 0; i < name.length; i++) {
    arr.push(name[i], score[i]);
    result.push(arr);
    arr = [];
  }
  return result;
}
function writeStats() {
  const data = getStats().join("\n");
  //console.log(data);
  const replace = data.replaceAll(",", " ");
  //console.log(replace);
  const fileName = "data/stats.txt";
  fs.writeFileSync(fileName, replace, "utf-8");
}
