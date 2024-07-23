const fs = require("fs");

const padawansList = fs
  .readFileSync("./data/padawans.txt", "utf-8")
  .split("\n")
  .filter((padawan) => padawan !== "");

const scoreList = fs
  .readFileSync("./data/scores.txt", "utf-8")
  .split("\n")
  .map((score) => Number(score))
  .filter((score) => score !== "");


function getPadawanNames() {
  return padawansList;
}

function getLightsaberScores() {
  return scoreList;
}

function getStats() {
  const padawansListArr = padawansList.map((el) => el.split())
  for (let i = 0; i < padawansListArr.length; i+=1) {
    padawansListArr[i].push(scoreList[i])
  }
  return padawansListArr
}

function writeStats() {
  fs.writeFileSync('./data/stats.txt', getStats().map((el)=> el.join (' ')).join('\n'), 'utf8')
}
writeStats()

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
