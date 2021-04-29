
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const padawans = require(`..data/padawans.txt`)
const score = require(`..data/score.txt`)
const statsTxt = getStats();

function getPadawanNames (padawans) {
return padawans.split("\n")
}

function getLightsaberScores (score) {
  return score.split("\n")
  }

function getStats () {
let getPadNa = getPadawanNames();
let getLiSc = getLightsaberScores();
let arr = [];
let bigArr = [];

for (let i = 0 ; i < getPadNa.length; i++){
arr.push(getPadNa[i]);
arr.push(getLiSc[i]);
bigArr.push(arr);
arr=[];
}
return bigArr;
}

function writeStats (x){
  x.join("\n").join(',');
return x
}
