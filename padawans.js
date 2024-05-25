const fs = require("fs");
const path = require('path')

function getPadawanNames() {
  const file = fs.readFileSync("./data/padawans.txt", "utf-8");
  let name = file.split("\n");
  for (let i = 0; i < name.length; i++) {
    name[i] = name[i].trim();
  }
  return name.splice(0, 4);
}

//console.log(getPadawanNames());

function getLightsaberScores() {
  const file = fs.readFileSync("./data/scores.txt", "utf-8");
  let arr = file.split("\n").map(Number);
  return arr;
}
//console.log(getLightsaberScores());

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  const pustotaArr = [];

  for (let i = 0; i < padawans.length; i++) {
    pustotaArr.push([padawans[i], scores[i]]);
  }
  return pustotaArr;
}

//console.log(getStats());


const writeStats = () => {
  const twoFunc = getStats();
  const dataToString = twoFunc.map(item => item.join(' ')).join('\n')
  fs.writeFileSync('data/stats.txt',dataToString)
  return "Если ты это читаешь, файл записался успешно";
};
console.log(writeStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
