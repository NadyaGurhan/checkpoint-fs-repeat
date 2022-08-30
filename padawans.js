const fs = require("fs");
const path = require("path");
const names = fs.readFileSync("./data/padawans.txt").toString("utf-8").trim();
const scores = fs.readFileSync("./data/scores.txt").toString("utf-8");

function getPadawanNames() {
  return names.split("\n")
  }


function getLightsaberScores(){
  return scores.split("\n").map(el => +el)
}


function getStats(){
  const table = [];
  getPadawanNames().forEach((el, i) => {
   table.push([el, getLightsaberScores()[i]])
  })
  return table
}

function writeStats(){
  for(let i =0; i<getStats().length-1; i++){
    fs.appendFileSync("./data/stats.txt", `${getStats()[i].join(' ')}\n`);
  }
  fs.appendFileSync("./data/stats.txt", `${getStats()[3].join(' ')}`);
}


  module.exports = {
    getPadawanNames,
    getLightsaberScores,
    getStats,
    writeStats,
  };
