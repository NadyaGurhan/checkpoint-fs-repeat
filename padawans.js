const fs = require('fs');

function getPadawanNames() {
  let newArr = fs.readFileSync('./data/padawans.txt', { encoding: 'utf8', flag: 'r' }).split('\n');
  newArr.pop();
  return newArr;
}

function getLightsaberScores() {
  let newArr = fs.readFileSync('./data/scores.txt', { encoding: 'utf8', flag: 'r' }).split('\n');
  return newArr.map(el => Number(el))
}

function getStats () {
  let padawansArr = getPadawanNames();
  let scoresArr = getLightsaberScores();
  let result = []
  for (let i=0; i < padawansArr.length; i++) {
    result.push(padawansArr[i] + ',' + scoresArr[i])
  }
  let splited = result.map(el => el.split(','))

  for (let i=0; i < splited.length; i++) {
    Number(splited[i][1]) // почему-то не работает
  }
  return splited;
}

console.log(getStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
