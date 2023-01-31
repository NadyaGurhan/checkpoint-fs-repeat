const fs = require("fs");
const { argv } = require("process");
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};

function getPadawanNames() {
  const res = []; // typeof object ?!
  res.push(fs.readFileSync("data/padawans.txt", "utf8"));
  return res;
}

getPadawanNames();

function getLightsaberScores() {
  const result = []; // typeof object ?!
  result.push(fs.readFileSync("data/scores.txt", "utf8"));
  console.log(result);
  return result;
}
getLightsaberScores();

// getStats();

// writeStats();
