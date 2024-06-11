const fs = require("fs");
const readFile = () => {
  const data = fs.readFileSync("./data/padawans.txt", "utf-8");
  return data;
};
const writeStats = (path, data) => {
  fs.appendFileSync(path, data);
};

const scores = () => {
  const data = fs.readFileSync("./data/scores.txt", "utf-8");
  return data;
};
const table = readFile().split("\n").slice(0, -1);
const scoresNum = scores().split("\n");
console.log(scoresNum);

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  return table;
}
const resGetPadawanNames = getPadawanNames();

function getLightsaberScores() {
  let res = [];
  let arr = [];
  for (let i = 0; i < resGetPadawanNames.length; i++) {
    arr.push(resGetPadawanNames[i]);
    arr.push(+scoresNum[i]);
    res.push(arr);
    arr = [];
  }
  return res;
}
let c = getLightsaberScores()
console.log(c)
function getStats(){
  writeStats("./data/stats.txt", c);
}
