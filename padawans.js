const fs = require('fs')
const { EOL } = require('os')

function getPadawanNames() { 
  const padawans = fs.readFileSync("./data/padawans.txt", "utf-8")
  return padawans.split("\n")
}

function getLightsaberScores() {
  const scores = fs.readFileSync("./data/scores.txt", "utf-8").split("\n")
  const result = scores.map(i => +i)
  return result
}

function getStats() {
  const scor = getLightsaberScores();
  const pad = getPadawanNames();
  const result = [];
  for(let i = 0; i < scor.length; i++) {
    result.push([pad[i], scor[i]])
  }
  return result
}

function getStatss() {
  const scor = getLightsaberScores();
  const pad = getPadawanNames();
  const result = [];
  for(let i = 0; i < scor.length; i++) {
    result.push([`${pad[i]} ${scor[i]}`])
  }
  return result
}

console.log(getStats())
function writeStats() {

  fs.writeFileSync('./data/stats.txt', getStatss().join(EOL)+EOL);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};