// let fs = require("fs");
// let firstFile = "./data/padawans.txt";
// let firstData = fs.readFileSync(firstFile, "utf8");

// let secondFile = "./data./scores.txt";
// let secondData = fs.readFileSync(secondFile, "utf8");

let fs = require("fs");
let firstFile = "./data/padawans.txt";
let firstData = fs.readFileSync(firstFile, "utf8");

let secondFile = "./data/scores.txt";
let secondData = fs.readFileSync(secondFile, "utf8");

function getPadawanNames() {
  return fs.readFileSync("data/padawans.txt", "utf8").slice(0, -1).split("\n");
}
let names = getPadawanNames();

function getLightsaberScores() {
  return fs
    .readFileSync("data/scores.txt", "utf8")
    .split("\n")
    .map((el) => +el);
}
let scores = getLightsaberScores();

function getStats() {
  let output = [];
  for (let i = 0; i < names.length; i++) {
    output[i] = [names[i], scores[i]];
  }
  let str = JSON.stringify(output);
  fs.appendFileSync("./data/stats.txt", str);
  return output;
}
function writeStats() {
  let result = []
  for (let i = 0; i < names.length; i++) {
    result.push(`${names[i]} ${scores[i]}`);
  }
  let str = result.join('\n');
  fs.writeFileSync('./data/stats.txt', str);
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
