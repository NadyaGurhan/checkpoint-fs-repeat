/* eslint-disable */
const fs = require('fs');

function getPadawanNames() {
const padawanws = fs.readFileSync("./data/padawans.txt", "utf-8").split('\n');
return (padawanws)
}

function getLightsaberScores() {
  const scoresSword = fs.readFileSync("./data/scores.txt", "utf-8").split('\n')
  const mapScoresSword = scoresSword.map(Number)
 
  return (scoresSword)
}

function getStats() {
  const padawanws = fs.readFileSync("./data/padawans.txt", "utf-8").split('\n');
  const scoresSword = fs.readFileSync("./data/scores.txt", "utf-8").split('\n')
  const mapScoresSword = scoresSword.map(Number)
 
}
 getStats()
function writeStats() {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

