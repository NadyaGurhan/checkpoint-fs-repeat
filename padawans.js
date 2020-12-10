const fs = require('fs');
function getPadawanNames() {
  let dataFromFile = fs.readFileSync('./data/padawans.txt', 'utf-8');
  dataFromFile = dataFromFile.split('\n');
  dataFromFile.pop();
  return dataFromFile;

}

function getLightsaberScores() {
  let scoreFromFile = fs.readFileSync('./data/scores.txt', 'utf-8');
  scoreFromFile = scoreFromFile.split('\n').map((el) => +el);
  return scoreFromFile;
}

function getStats() {
  let padawansString = getPadawanNames();
  let scoresString = getLightsaberScores();
  let res = padawansString.map((el, i) => el = [el, scoresString[i]])
  return res;
}

function writeStats (){
  let res = getStats();

  fs.writeFileSync('./data/stats.txt', res.join('\n').replace(/,/g, ' '))
}

// getPadawanNames();
// getLightsaberScores();


// console.log(getPadawanNames(), getLightsaberScores(), getStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
