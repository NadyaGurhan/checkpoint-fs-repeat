const fs = require("fs");

function getPadawanNames() {
  let names = fs
    .readFileSync("./data/padawans.txt", "utf-8")
    .split("\n")
    .slice(0, -1);
  return names;
}

function getLightsaberScores() {
  let scores = fs
    .readFileSync("./data/scores.txt", "utf-8")
    .split("\n")
    .map((el) => +el);
  return scores;
}

function getStats() {
  let stats = [];
  let names = getPadawanNames();
  let score = getLightsaberScores();
  // for (let i = 0; i < names.length; i++) {
  //   stats[i] = `${names[i]} ${score[i]}`;
  // result = stats[i].split(" ");
  // console.log(result);
  newPeopleArray = names.map((el, i) => [el, score[i]]);
  return newPeopleArray;
}

function writeStats(result) {
  const data = getStats()
    .map((el) => el.join(" "))
    .join("\n");
  fs.writeFileSync("./data/stats.txt", data);
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
