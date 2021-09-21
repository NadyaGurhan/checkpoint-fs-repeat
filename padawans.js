const fs = require("fs");

function getPadawanNames() {
  const padawanNames = [fs.readFileSync("./data/padawans.txt", "utf8").split("\n")[0], fs.readFileSync("./data/padawans.txt", "utf8").split("\n")[1], fs.readFileSync("./data/padawans.txt", "utf8").split("\n")[2], fs.readFileSync("./data/padawans.txt", "utf8").split("\n")[3]];
  return padawanNames;
}

function getLightsaberScores() {
  const lightsaberScores = [Number(fs.readFileSync("./data/scores.txt", "utf8").split("\n")[0]), Number(fs.readFileSync("./data/scores.txt", "utf8").split("\n")[1]), Number(fs.readFileSync("./data/scores.txt", "utf8").split("\n")[2]), Number(fs.readFileSync("./data/scores.txt", "utf8").split("\n")[3])];
  return lightsaberScores;
}

function getStats() {
  const stats = [[fs.readFileSync("./data/padawans.txt", "utf8").split("\n")[0], Number(fs.readFileSync("./data/scores.txt", "utf8").split("\n")[0])], [fs.readFileSync("./data/padawans.txt", "utf8").split("\n")[1], Number(fs.readFileSync("./data/scores.txt", "utf8").split("\n")[1])], [fs.readFileSync("./data/padawans.txt", "utf8").split("\n")[2], Number(fs.readFileSync("./data/scores.txt", "utf8").split("\n")[2])], [fs.readFileSync("./data/padawans.txt", "utf8").split("\n")[3], Number(fs.readFileSync("./data/scores.txt", "utf8").split("\n")[3])]];
  return stats;
}

function writeStats() {
  const stats = [[fs.readFileSync("./data/padawans.txt", "utf8").split("\n")[0] + " " +  Number(fs.readFileSync("./data/scores.txt", "utf8").split("\n")[0])], [fs.readFileSync("./data/padawans.txt", "utf8").split("\n")[1] + " " +  Number(fs.readFileSync("./data/scores.txt", "utf8").split("\n")[1])], [fs.readFileSync("./data/padawans.txt", "utf8").split("\n")[2] + " " +  Number(fs.readFileSync("./data/scores.txt", "utf8").split("\n")[2])], [fs.readFileSync("./data/padawans.txt", "utf8").split("\n")[3] + " " + Number(fs.readFileSync("./data/scores.txt", "utf8").split("\n")[3])]];
  const joined = stats.join("\n");
  return fs.writeFileSync("data/stats.txt", joined);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
