const fs = require('fs');

const getPadawanNames = (names) => {
  const names = fs.readFileSync("./data/padawans.txt", "utf8");
  console.log(names)
  names.split();
  return array;
};
getPadawanNames()

// function writeStats() {
// let array = [];

// fs.appendFileSync ('stats',array, 'utf8')
// }

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
