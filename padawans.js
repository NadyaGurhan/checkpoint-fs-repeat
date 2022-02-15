const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n')
  .slice(0, 4);

}

function getLightsaberScores() {
  return fs.readFileSync('./data/scores.txt', 'utf-8').split('\n')
  .map((el) => +el);
}
//console.log(getPadawanScores())

function getStats() {
  let padNames = getPadawanNames();
  let padScores = getLightsaberScores();
  let result = [];

  for (let i = 0; i < padNames.length; i++) {
    result.push([padNames[i], padScores[i]]);
  }
  result = result.map((el) => el.join(" "));

  
  return result;
}

function writeStats(){
  fs.appendFileSync("./data/stats.txt", result.join("\n"));
}



//console.log(getStats())
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
