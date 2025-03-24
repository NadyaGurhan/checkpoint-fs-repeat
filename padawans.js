const fs = require('fs')
const { EOL } = require('os');
 
function getPadawanNames(){
  return fs.readFileSync("data/padawans.txt", "utf-8").trim().split(`${EOL}`).map(name => name.trim())
}

function getLightsaberScores(){
  return fs.readFileSync("data/scores.txt", "utf-8").trim().split('\n').map(Number)
}

function getStats(){
const names = getPadawanNames();
const scores = getLightsaberScores();

console.log("Names", names);
console.log("Scores", scores);

return names.map((name, index) => [name, scores[index]])
}

function writeStats(stats){
  const data = stats.map(([name, score]) => `${name} ${score}`).join("\n")
  fs.writeFileSync("data/stats.txt", data, "utf-8")
}



module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
