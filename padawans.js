const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

let filePath = "./data/padawans.txt";
let data = fs.readFileSync(filePath,"utf-8");

function getPadawanNames() {
  let arr = [];
  for (let i = 0; i < data.length; i++){
    arr.push(data[i])
  }
  return arr;
}

let beda = "./data/scores.txt";
let voobshebeda = fs.readFileSync(beda, "utf-8");

function getLightsaberScores(){
  let scores = [];
  for (let i = 0; i < voobshebeda.length; i++){
    scores.push(voobshebeda[i])
  }
  return scores
}