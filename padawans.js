const fs = require('fs');
const { EOL } = require('os');
const readPadawns = fs.readFileSync('data/padawans.txt', 'utf-8');
const readScores = fs.readFileSync('data/scores.txt', 'utf-8');

function getPadawanNames() {
  const names = readPadawns.split(EOL);
  return names.splice(0, 4);
}

function getLightsaberScores() {
  const num = readScores.split(EOL);
  return num.map(Number);
}


function getStats(){
  const pathPadawns = getPadawanNames();
  const pathScores = getLightsaberScores();
  return pathPadawns.map((name, scores) => [name, pathScores[scores]])
}

function writeStats(stats){
const str = stats.map(el => el.join(' ')).join(EOL)
fs.writeFileSync('data/stats.txt', str)
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
    getStats,
    writeStats,
};
