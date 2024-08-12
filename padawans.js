const fs = require('fs')
const {EOL} = require('os')


function getPadawanNames() {
  return fs.readFileSync("data/padawans.txt","utf-8").split(`${EOL}`).filter(el => el!="");
}

function getLightsaberScores() {
  return fs.readFileSync("data/scores.txt","utf-8").split(`${EOL}`).map(el => +el);
}

function getStats () {
  const padawans = fs.readFileSync("data/padawans.txt","utf-8").split(`${EOL}`).filter(el => el!="");
  const padawansScores = fs.readFileSync("data/scores.txt","utf-8").split(`${EOL}`).map(el => +el);
  let padawansStats = [];
  for (let i = 0; i < padawans.length; i++) {
    padawansStats.push([padawans[i],padawansScores[i]]);
  }
  return padawansStats;
}

function writeStats() {
  const padawans = fs.readFileSync("data/padawans.txt","utf-8").split(`${EOL}`).filter(el => el!="");
  const padawansScores = fs.readFileSync("data/scores.txt","utf-8").split(`${EOL}`).map(el => +el);
  let padawansStats = [];
  for (let i = 0; i < padawans.length; i++) {
    padawansStats.push(`${padawans[i]} ${padawansScores[i]}`);
  }
  fs.writeFileSync("data/stats.txt", padawansStats.join(`\n`));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};