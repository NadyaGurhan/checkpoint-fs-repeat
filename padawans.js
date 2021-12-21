const fs = require("fs");
const { func } = require("prop-types");
const padawans = fs.readFileSync(__dirname + "/data/padawans.txt", "utf8");
const scores = fs.readFileSync(__dirname + "/data/scores.txt", "utf8");
function getPadawanNames() {
  let result = padawans.trim().split('\n');
  return result;
}


function getLightsaberScores() {
let scoreString = scores.split('\n');
return scoreString.map(i => i * 1);
} 

function getStats() {
let padawan = getPadawanNames();
let score = getLightsaberScores();
let arr = [];
for (let i = 0; i < padawan.length; i++) {
arr.push([padawan[i], score[i]]);

}
return arr;
}
function writeStats() {
  let expor = getStats();
return fs.writeFileSync("data/stats.txt", expor.join('\n').split(',').join(' '));

}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
