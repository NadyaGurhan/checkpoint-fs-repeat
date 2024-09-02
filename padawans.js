const { log, Console } = require("console");
const fs = require("fs");
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  let name = fs.readFileSync("./data/padawans.txt", "utf-8").split("\n", 4);
  return name;
}

function getLightsaberScores() {
  let sabre = fs
    .readFileSync("./data/scores.txt", "utf-8")
    .split("\n")
    .map(Number);
  return sabre;
}

function getStats() {
  let names = getPadawanNames();
  let skill = getLightsaberScores();
  let result = [];
  for (let i = 0; i < names.length; i++) {
    result.push([names[i], skill[i]]);
  }

  return result;
}

function writeStats() {
  const dann = getStats();
  const newArr = dann.map((el) => el.join(" "));
  const asd = newArr.join("\n");
  fs.writeFileSync("./data/stats.txt", asd);
}
console.log(writeStats());
