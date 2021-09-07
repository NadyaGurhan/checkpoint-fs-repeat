const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync("./data/padawans.txt", "utf8");
  let names = padawans.split('\n');

  return names.splice(0, 4);
};



function getLightsaberScores() {
  const lightSaber = fs.readFileSync("./data/scores.txt", "utf8");
  let result = lightSaber.split('\n');
  let score = [];
for (let i = 0; i < result.length; i++) {
score.push(Number(result[i]))
  
} return score;
}


function getStats() {
  const padawans = fs.readFileSync("./data/padawans.txt", "utf8");
  let names = padawans.split('\n');
 names.splice(0, 4);

 const lightSaber = fs.readFileSync("./data/scores.txt", "utf8");
 let result = lightSaber.split('\n');
 let score = [];
for (let i = 0; i < result.length; i++) {
score.push(Number(result[i]))

let stats =[];
for (let i = 0; i < 4; i++) {
  stats.push(names[i]);
  stats.push(score[i])
}
console.log(stats);

}
}
console.log(getStats());

function writeStats() {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
