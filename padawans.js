const fs = require("fs");

const getPadawanNames = () =>
  fs.readFileSync(`./data/padawans.txt`, "utf-8").split("\n").slice(0, 4);

function getLightsaberScores() {
  return fs
    .readFileSync(`./data/scores.txt`, "utf-8")
    .split("\n")
    .map((el) => Number(el));
}

function getStats() {
  let nameList = getPadawanNames();
  let padaScores = getLightsaberScores();
  // let arr = [];
  // for (let i = 0; i < name.length; i++) {
  //   // console.log(name[i], padaScores[i])
  //   arr.push([name[i], +padaScores[i]]);
  //   arr[i].map((x) => +x);
  // }
  return nameList.map((name, index) => [name, padaScores[index]]);
}

function writeStats(stats = []) {
  // console.log(stats);
  for (let i = 0; i < stats.length; i++) {
    //stats.replace(',',' ')
    fs.appendFileSync(`./data/stats.txt`, `${stats[i][0]} ${stats[i][1]}\n`);
  }
  //OR BELOW>>>>>>>>>>>>>>>>>>>>>>>>.
  // const resultString = stats.reduce(
  //   (acc, el) => acc + `${el[0]} ${el[1]}\n`,
  //   ""
  // );
  // fs.writeFileSync(`./data/stats.txt`, `${resultString}`);
  // return resultString;
}

const res = writeStats(getStats());

console.log(res);

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
