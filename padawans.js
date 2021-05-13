const fs = require("fs");

function getPadawanNames() {
  let filenames = fs.readFileSync("./data/padawans.txt", "utf-8");
  let nameList = filenames.split('\n')
  let nameArr = nameList.slice(0, nameList.length -1)
  return nameArr
}

function getLightsaberScores() {
  let filescores = fs.readFileSync("./data/scores.txt", "utf-8");
  let scoresList = filescores.split('\n');
  let scoreArr = scoresList.map(el => Number(el));
  return scoreArr;
}

function getStats() {
  let name = getPadawanNames();
  let score = getLightsaberScores();
  let arr = [];
  return arr.concat(name, score)

}

function writeStats() {
  let data = getStats()
  console.log(data)
  let finalData = data.join('\n')
  let inputFile = fs.writeFileSync('./data/stats.txt', finalData);
}




module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
