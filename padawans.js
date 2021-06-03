const fs = require('fs');
// const status = 

function getPadawanNames(){
  let name = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n').slice(0, -1);
  return name;
}

function getLightsaberScores(){
  let score = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');
  score = score.map(el => +el)
  return score;
}

function getStats(){
  let dataName = getPadawanNames();
  let scoresList = getLightsaberScores();
  let arr = [];
  let arrResult = [];

  for (let i = 0; i < dataName.lengs; i++){
    arr.push(dataName[i], scoresList[i]);
    arrResult.push(arr);
    arr = [];
  }
  // arr.map(el => el.join(''))
  // return fs.writeFileSync('./data/status.txt', arr.map(el => el.join('')))
  return arrResult;
}

function writeStats(){

  return writeStats
}

console.log(getStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
