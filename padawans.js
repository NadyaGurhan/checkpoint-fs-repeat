const fs = require('fs')


function getPadawanNames(){
  const padawanNames = fs.readFileSync('./data/padawans.txt', 'utf8');
  return padawanNames.trim().split('\n').map(line => line.trim());
}

function getLightsaberScores (){
  const ligthSaberScr= fs.readFileSync('./data/scores.txt', 'utf8');
  return ligthSaberScr.trim().split('\n').map(Number);
}

function getStats (){
  const names = getPadawanNames();
  const score = getLightsaberScores();
  return names.map((nme, idIndex) =>[nme, score[idIndex]]);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
