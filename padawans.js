const fs = require("fs");

function getPadawanNames() {
  return fs.readFileSync("./data/padawans.txt", "utf8").split(`\n`);
}

function getLightsaberScores() {
  return fs.readFileSync("./data/scores.txt", "utf8").split(`\n`).map(Number);
}

function getStats() {
  const padawans = fs.readFileSync("./data/padawans.txt", "utf8").split(`\n`);
  console.log(padawans);
  const scores = fs.readFileSync("./data/scores.txt", "utf8").split(`\n`).map(Number);
  console.log(scores);
  let result = [ ];
  for (let i =0; i < padawans.length && i < scores.length; i++) {
    result.push(padawans[i])+result.push(scores[i]);
  }
  console.log(result);
  // let result = [padawans[i]+scores[i]];
  
 }
 getStats();
function writeStats() {
  
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
