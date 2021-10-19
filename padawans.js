const { profile } = require("console");
const fs = require("fs");

function getPadawanNames() {
  const padawanNames = fs
    .readFileSync("./data/padawans.txt", "utf-8")
    .split("\n")
    .filter((element) => element != "");
  return padawanNames;

  // List of names
}
function getLightsaberScores() {
  // Light-sword  training scores
  const scores = fs
    .readFileSync("./data/scores.txt", "utf-8")
    .split("\n")
    .filter((element) => element)
    .map((element) => Number(element));
  return scores;
}

function getStats() {
  // return list of list, each element is a list
  // which includes name and score
  const stats = [];
  const [names, scores] = [getPadawanNames(), getLightsaberScores()];
  let profile;

  for (let i = 0; i < names.length; i += 1) {
    profile = [names[i], scores[i]];
    stats.push(profile);
  }
  return stats;
}
getStats();

function writeStats() {
  // create a new file and save smth inside
  const statisticsRaw = getStats();
  const statistics = [];
  for (let i = 0; i < statisticsRaw.length; i += 1) {
    let line = statisticsRaw[i].join(" ");
    statistics.push(line);
  }
  fs.writeFileSync("./data/stats.txt", statistics.join("\n"));
}
writeStats();
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
