const fs = require("fs");
const { join } = require("path");
const padawans = fs.readFileSync(`./data/padawans.txt`, "UTF-8").split('\n');
const scores = fs.readFileSync(`./data/scores.txt`, "UTF-8").split('\n');

function getPadawanNames(){
  const arr = padawans;
  if(arr.length > 4){
    arr.length = arr.length - 1
    return arr
  }
  else{
    return arr
  }
}

function getLightsaberScores(){
  const arr = scores;
  let res =[]
  arr.forEach((el) => res.push(Number(el)))
 return res
}

function getStats(){
  const pad = getPadawanNames();
  const score = getLightsaberScores();
  const arr = [];
    for (let i = 0; i < pad.length; i++) {
      arr.push([pad[i],score[i]])
    }
    return arr;
}

function writeStats(){
  const res = getStats().map(el => el[0] +" " + el[1]).join('\n');
  const path = `data/stats.txt`
  return fs.writeFileSync(path , res)
  }

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
