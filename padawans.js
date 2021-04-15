const fs = require('fs');

function getPadawanNames() {
  let fileStr = fs.readFileSync("./data/padawans.txt", "utf8");
  let resultArr = fileStr.trim().split('\n');
  return resultArr;
}

function getLightsaberScores() {
  let fileStr = fs.readFileSync("./data/scores.txt", "utf8");
  let resultArr = fileStr.trim().split('\n');
  return resultArr.map((elem) => +elem);
}

function getStats() {
  let resultArr = [];
  let arrNames = getPadawanNames();
  let arrScores = getLightsaberScores();

  for (let i = 0; i < arrNames.length; i++) {
    let elemArr = [];
    elemArr.push(arrNames[i]);
    elemArr.push(arrScores[i]);
    resultArr.push(elemArr);
  }
  return resultArr;
}

function writeStats() {
  let writeStr = '';
  let arr = getStats();
  for (let i = 0; i < arr.length; i++) {
    writeStr += arr[i].join(' ') + '\n';
  }
  fs.writeFileSync('./data/stats.txt', writeStr);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

console.log(writeStats());
