const fs = require("fs");

function getPadawanNames() {
  const text = fs.readFileSync("data/padawans.txt", "utf8").split("\n");
  let arrayName = text.pop();
  return text;
}

function getLightsaberScores() {
  const text = fs.readFileSync("data/scores.txt", "utf8");
  let arrayName = text.split("\n");
  arrayName = arrayName.map((el) => (el = +el));
  return arrayName;
}

function getStats() {
  const text = fs.readFileSync("data/scores.txt", "utf8");
  let arrayName = text.split("\n");
  arrayName = arrayName.map((el) => (el = +el));
  const text1 = fs.readFileSync("data/padawans.txt", "utf8").split("\n");
  let arrayNames = text1.pop();
  const stats = [[], [], [], []];
  for (let i = 0; i < arrayName.length; i++) {
    stats[i].push(text1[i]);
    stats[i].push(arrayName[i]);
  }
  return stats;
}

function writeStats() {
  fs.writeFileSync("./newText.txt", tel, "utf8");
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
