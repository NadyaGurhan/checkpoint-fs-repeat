const fs = require("fs");

function getArrayFromText(filePath) {
  let padawans = fs
    .readFileSync(__dirname + `${filePath}`, "utf-8")
    .split("\n");
  return padawans;
}
function newFile(filePath, content) {
  fs.writeFileSync(`${__dirname}${filePath}.txt`, `${content}`, (err) => {
    if (err) console.log(err);
  });
}

function getPadawanNames() {
  let answer = getArrayFromText("/data/padawans.txt");
  let poppedItem = answer.pop();
  return answer;
}
function getLightsaberScores() {
  let sabers = getArrayFromText("/data/scores.txt");
  return sabers.map((e) => parseFloat(e));
}
function getStats() {
  let stats = getPadawanNames();
  let arr = new Array(0);
  let sabers = getLightsaberScores();
  stats.forEach((element, index) => {
    arr[index] = stats[index].split(",");
  });
  for (let i = 0; i < stats.length; i++) {
    arr[i].push(sabers[i]);
  }
  return arr;
}
// function writeStats() {
//   let stats = getStats();
//   // stats.forEach((element, index) => element[index].replace(/\,/g, ''));
//   for(let i = 0; i < stats.length; i++){
//     stats[i].replace(//)
//   }
//   console.log(stats[0]);
//   let formatAnswer = newFile('/data/stats', stats);
//  return formatAnswer;
// }
// writeStats()
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
