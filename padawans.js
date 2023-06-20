const fs = require("fs");
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  let padawans = fs.readFileSync("./data/padawans.txt", "utf8").split("\r\n");
  let output = [];
  for (let i = 0; i < padawans.length; i++) {
    if (padawans[i] !== "") {
      output.push(padawans[i]);
    }
  }
  return output;
}

function getLightsaberScores() {
  let scores = fs.readFileSync("./data/scores.txt", "utf8").split("\r\n");
  let output = [];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] !== "") {
      output.push(Number(scores[i]));
    }
  }
  return output;
}

function getStats() {
  let tempPadawans = fs
    .readFileSync("./data/padawans.txt", "utf8")
    .split("\r\n");
  let padawans = [];
  for (let i = 0; i < tempPadawans.length; i++) {
    if (tempPadawans[i] !== "") {
      padawans.push(tempPadawans[i]);
    }
  }
  let tempScores = fs.readFileSync("./data/scores.txt", "utf8").split("\r\n");
  let scores = [];
  for (let i = 0; i < tempScores.length; i++) {
    if (tempScores[i] !== "") {
      scores.push(Number(tempScores[i]));
    }
  }
  let output = [];
  for (let i = 0; i < padawans.length; i++) {
    output.push([padawans[i], scores[i]]);
  }
  return output;
}
function writeStats() {
  let filePath = `./data/stats.txt`;
  let data = "";
  let newData = getStats().join("\n").replaceAll(/,/g, ' ');
  data = data + newData;
  fs.writeFileSync(filePath, data);
}
