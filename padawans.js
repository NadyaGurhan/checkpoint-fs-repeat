const fs = require("fs");

const getPadawanNames = () => {
  let wars = fs
    .readFileSync("./data/padawans.txt", "utf8")
    .split("\n")
    .slice(0, 4);
  return wars;
};

const getLightsaberScores = () => {
  let numbs = fs
    .readFileSync("./data/scores.txt", "utf8")
    .split("\n")
    .map((el) => +el);
  return numbs;
};

const getStats = () => {
  let wars = getPadawanNames();
  let numbs = getLightsaberScores();
  let elem = [];
  for (let i = 0; i < wars.length; i++) {
    elem.push([wars[i], numbs[i]]);
  }
  return elem;
};

const writeStats = (stars) => {
  // let stars = getStats()
  // let elem = [];
  // let arr;
  for (let i = 0; i < stars.length; i++) {
    fs.fs.writeFileSync(`./data/stats.txt`, `${stars[i][0]} ${stars[i][1]}\n`)
    }
  
  }


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
