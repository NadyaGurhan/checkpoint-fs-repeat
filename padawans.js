const fs = require("fs");


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};

function getPadawanNames() {
  let names = fs.readFileSync("./data/padawans.txt", "utf-8");
  let arr = names.split("\n");
  // console.log(arr.slice(0, -1));
  return arr.slice(0, -1);
}

// getPadawanNames();

function getLightsaberScores() {
  let swords = fs.readFileSync("./data/scores.txt", "utf-8");
  let arr = swords.split("\n");
  let scores = [];
  for (let i = 0; i < arr.length; i += 1) {
    scores.push(+arr[i]);
  }
  // console.log(scores);
  return scores;
}

// getLightsaberScores();

function getStats () {
  let arr = [];
  for (let i = 0; i < getLightsaberScores().length; i += 1) {
    arr.push(getPadawanNames()[i], getLightsaberScores()[i]);
  }

  // return arr;
}

getStats();
