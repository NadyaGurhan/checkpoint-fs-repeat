const fs = require("fs");
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const data = fs.readFileSync("./data/padawans.txt", "utf8");
  const arr = data.split("\n");
  let resultArr = [];
  arr.forEach((el) => {
    if (el.length > 0) {
      resultArr.push(el);
    }
  });
  return resultArr;
}

function getLightsaberScores() {
  const data = fs.readFileSync("./data/scores.txt", "utf8");
  const arr = data.split("\n");
  const resultArr = [];

  arr.forEach((el) => {
    resultArr.push(Number(el));
  });

  return resultArr;
}

function getStats() {
  const arrNames = getPadawanNames();
  const arrScores = getLightsaberScores();

  const resultArr = [];

  for (let i = 0; i < arrNames.length; i = i + 1) {
    const arr = [];
    arr.push(arrNames[i]);
    arr.push(arrScores[i]);
    resultArr.push(arr);
  }
  return resultArr;
}

function writeStats(arr) {
  const resultArr = []
  
  arr.forEach(el => {
    resultArr.push(el.join(' '))
  })

  fs.writeFileSync("./data/stats.txt", `${resultArr.join('\n')}`);
}

writeStats(getStats())
