const fs = require('fs')

function getPadawanNames()  {
  const padawanNames = fs.readFileSync("./data/padawans.txt", "utf-8").split("\n");
  padawanNames.pop();
  return padawanNames;
};

function getLightsaberScores() {
  const lightsaberScore = fs.readFileSync("./data/scores.txt", "utf-8").split("\n");
  return lightsaberScore.map((n) => Number(n));
};


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
