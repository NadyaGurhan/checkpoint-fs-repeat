const fs = require("fs");

//
//
//   getPadawanNames
const getPadawanNames = () => {
  const names = fs
    .readFileSync("./data/padawans.txt", "utf-8")
    .trim();

  return names;
};

console.log(getPadawanNames());

//
//
//   getLightsaberScores
const getLightsaberScores = () => {
  const scores = fs
    .readFileSync("./data/scores.txt", "utf-8")
    .trim();

  return scores;
};

console.log(getLightsaberScores());

//
//
//   getStats
function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();

  const arrStats = [];

  for (let i = 0; i < names.length; i += 1) {
    const current = [];
    current.push(names[i], scores[i]);

    arrStats.push(current);
  }

  return arrStats;
}

console.log(getStats());

//
//
// writeStats
// function writeStats(data) {
//   fs.appendFileSync("./data/stats.txt", data);
// }

// writeStats(getStats());

// module.exports = {
//   getPadawanNames,
//   getLightsaberScores,
//   getStats,
//   writeStats,
// };
