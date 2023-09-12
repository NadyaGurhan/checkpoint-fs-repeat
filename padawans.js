const fs = require("fs");
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};


function getPadawanNames() {
  let getNames = fs.readFileSync(__dirname + "/data/padawans.txt", {
    encoding: "utf-8",
  });
  const padavans = getNames.split("\n").slice(0, -1);

  return padavans;
}

function getLightsaberScores() {
  let getScores = fs.readFileSync(__dirname + "/data/scores.txt", {
    encoding: "utf-8",
  });
  const scores = getScores.split("\n");
  const scoresNum = scores.map((elem) => Number(elem));

  return scoresNum;
}

function getStats() {
  let names = getPadawanNames();
  let scores = getLightsaberScores();
  let stat = [];
  for (let i = 0; i < names.length; i += 1) {
    stat.push([names[i], scores[i]]);
  }
  return stat;
}

let path = `data/stats.txt`
function writeStats(path, stat) { 
  if (!stat && !path && !stat.length) return;
  fs.writeFileSync(path, stat); 
}

