const fs = require("fs");
const { func } = require("prop-types");
const padawans =fs.readFileSync(__dirname + "/data/padawans.txt", "utf8");
const scores =fs.readFileSync(__dirname + "/data/scores.txt", "utf8");

function getPadawanNames() {
  let result = padawans.split('\n');
  result.pop();
  return result;
}
getPadawanNames();

function getLightsaberScores() {
let scoreString = scores.split('\n');

return scoreString.map(i => +i);
} getLightsaberScores();

function getStats() {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
