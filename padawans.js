const fs = require("fs");
let textName;
let textNumber;
let index;
let stats = [];

function getPadawanNames() {
  textName = fs.readFileSync("data/padawans.txt", "utf8").split("\n");
  textName.pop();
  //console.log(textName);
  return textName;
}
getPadawanNames();

function getLightsaberScores() {
  textNumber = fs.readFileSync(`data/scores.txt`, "utf8").split("\n");
  textNumber = textNumber.map((s) => +s);
  //console.log(a);
  return textNumber;
}
getLightsaberScores();

function getStats() {
  for (let i = 0; i < textName.length; i++) {
    textName[i] = textName[i] + "!";
    textName[i] = textName[i].split("!");
    index = textName[i].concat(textNumber[i]);
    index.splice(1, 1);
    stats.push(index);
  }
  console.log(stats);
  return stats;
}

function writeStats(){

let data = `data/stats.txt`;
let a = fs.writeFileSync(data, stats.join("\n"));
let b = fs.readFileSync(data, "utf8");
console.log(b);
return b;
}
writeStats()

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
