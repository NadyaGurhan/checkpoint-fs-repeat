const fs = require("fs");
const { EOL } = require("os");




const getPadawanNames = () => {
  return fs
    .readFileSync("./data/padawans.txt", "utf-8")
    .split(`${EOL}`)
    .filter((el) => el !== "");
};

const getLightsaberScores = () =>
  fs
    .readFileSync("./data/scores.txt", "utf-8")
    .split(`${EOL}`)
    .map((el) => Number(el));

    
const getStats = () => {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  let result = [];
  for (let i = 0; i < padawans.length; i++) {
    if (padawans[i]) {
      result.push([padawans[i], scores[i]]);
    }
  }
  return result;
};

const writeStats = () => {
  const stats = getStats().join(`\n`)
  let re = /,/gi
 return fs.writeFileSync('./data/stats.txt', stats.replace(re, ' '))
};
 console.log(writeStats())
 writeStats()

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
// console.log(getPadawanNames);
