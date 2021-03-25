const fs = require('fs');

function getPadawanNames () {
  let name = fs.readFileSync('./data/padawans.txt', 'utf8');
  let nameInfo = name.split('\n').slice(0, 4);
  return nameInfo;
}

function getLightsaberScores() {
  let score = fs.readFileSync('./data/scores.txt', 'utf8')
  let scoreInfo = score.split('\n').map(a => Number(a));
  return scoreInfo;
}


function getStats() {
  
}

function writeStats() {

}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
