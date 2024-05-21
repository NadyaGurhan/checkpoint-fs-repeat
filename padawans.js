const fs = require("fs");

const padavans = fs.readFileSync("./data/padawans.txt", "utf8");
const scores = fs.readFileSync("./data/scores.txt", "utf8");

function getPadawanNames() {
  return padavans.split("\n ").splice(-1);
}

function getLightsaberScores() {
  const stringScores = scores.split("\n");
  const swordScores = [];
  for (let i = 0; i < stringScores.length; i++) {
    swordScores.push(Number(stringScores[i]));
  }
  return swordScores;
}

function getStats() {
  const padavanNames = padavans.split("\n");
  const stringScores = scores.split("\n");

  const swordScores = [];
  for (let i = 0; i < stringScores.length; i++) {
    swordScores.push(Number(stringScores[i]));
  }
  const result = [];
  const [firstJedai, secondJedai, thirdJedai, fourthJedai] = padavanNames;
  const [firstRait, secondRait, thirdRait, fourthRait] = swordScores;

  result.push([firstJedai, firstRait]);
  result.push([secondJedai, secondRait]);
  result.push([thirdJedai, thirdRait]);
  result.push([fourthJedai, fourthRait]);

  return result;
}

function writeStats() {}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
