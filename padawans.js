const { log } = require("console");
const fs = require("fs");
const dataScore = fs.readFileSync(__dirname + "/data/scores.txt", {
  encoding: "utf-8",
});

const scoreArr = dataScore.split(" ");

function getPadawanNames() {
  const data = fs.readFileSync(__dirname + "/data/padawans.txt", {
    encoding: "utf-8",
  });
  const padawanArr = data.trim().split('\n');
  const namesArr = [];
  padawanArr.forEach((element) => {
    namesArr.push(element);
  });
  return namesArr;
}
function getLightsaberScores(){
  const data = fs.readFileSync(__dirname + "/data/scores.txt", {
    encoding: "utf-8",
  });
  const Arr = data.trim().split('\n');
  const csoresArr = [];
  Arr.forEach((element) => {
    csoresArr.push(+element);
  });
  return csoresArr;
}

function getStats(){
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  let arr = [];
  let res = []
  for (let i = 0; i<padawans.length; i++){
    arr.push(padawans[i], Number(scores[i]));
    res.push(arr);
    arr = [];
  }
  return res
}
function writeStats(){

}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
