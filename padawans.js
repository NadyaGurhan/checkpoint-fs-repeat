const fs = require('fs');
// const fs = require('fs')
// module.exports = {
  //   getPadawanNames,
  //   getLightsaberScores,
  //   getStats,
  //   writeStats,
  // };

function getPadawanNames() {
  const names = fs.readFileSync("./data/padawans.txt",'utf-8');
  const result = names.split('\r\n')
  result.pop()
  return result
}
// console.log(getPadawanNames())

function getLightsaberScores() {
  const number = fs.readFileSync("./data/scores.txt","utf-8");
  const result = number.split("\n").map(Number);
  return result;
}


function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  
  return padawans.map((name, index) => [name, scores[index]]);
}

function writeStats(stats) {
  const output = stats.map(pair => `${pair[0]} ${pair[1]}`).join('\n');
  fs.writeFileSync('data/stats.txt', output);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
