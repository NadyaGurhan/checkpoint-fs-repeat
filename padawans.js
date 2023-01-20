const fs = require("fs");

function getPadawanNames() {
  const namePad = fs.readFileSync(`${__dirname}/data/padawans.txt`, "utf-8");
  const affg = namePad.split("\n").filter((el) => el !== "");
  return affg;
}
//console.log(getPadawanNames());

function getLightsaberScores() {
  const scoresPad = fs.readFileSync(`${__dirname}/data/scores.txt`, "utf-8");
  return scoresPad.split("\n").map((el) => Number(el));
}
//console.log(getLightsaberScores());

function getStats() {
  const getPadawaames = getPadawanNames();
  const getLitsaberScores = getLightsaberScores();
  const stats = getPadawaames.map((el, i) => [el, getLitsaberScores[i]]);
  return stats;
}
console.log(getStats());

function writeStats() {
  const arrayStats = getStats();
  arrayStats.map((el) => {
    if (!fs.existsSync(`${__dirname}/data/stats.txt`)) {
      fs.writeFileSync(`${__dirname}/data/stats.txt`, `${el[0]} ${el[1]}`);
    } else {
      fs.appendFileSync(`${__dirname}/data/stats.txt`, `\n${el[0]} ${el[1]}`);
    }
  });
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
