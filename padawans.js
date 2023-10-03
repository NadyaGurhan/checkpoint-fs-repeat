const fs = require('fs');

function getPadawanNames() {
  const padList = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n').slice(0, -1);//так же можно решить через pop(), что будет на две строчки длиннее
  console.log(padList);
  return padList;
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n').map((el) => Number(el));//
  console.log(scores);
  return scores;
}

function getStats() {
  // const names = getPadawanNames();
  // const rate = getLightsaberScores();
  const res = [];
  let tempArr = [];//здесь let, т.к. это массив для временных данных
  
  for(let i = 0; i < getPadawanNames().length; i++){
    tempArr.push(getPadawanNames()[i], getLightsaberScores()[i]);
    res.push(tempArr);
    tempArr = [];//перезаписываем временный массив, где будут храниться данные каждой итерации цикла, иначе произойдёт наслоение
  };
  return res;
}

function writeStats(stats) {
  fs.writeFileSync('./data/stats.txt', getStats().join('\n').replaceAll(',', ' '));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
