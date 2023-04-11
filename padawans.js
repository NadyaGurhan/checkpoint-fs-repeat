const fs = require("fs");

const getPadawanNames = () =>
  fs
    .readFileSync(`${__dirname}/data/padawans.txt`, "utf-8")
    .split("\n")
    .slice(0, 4);

const getLightsaberScores = () =>
  fs
    .readFileSync(`${__dirname}/data/scores.txt`, "utf-8")
    .split("\n")
    .map((el) => el * 1);

const getStats = () => {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  const skills = padawans.concat(scores);
  let result = [];
  for (let i = 0; i <= skills.length; i += 1) {
    result.push(skills[i] + skills[i + 4]);
  }

  return result;
};

module.exports = { getPadawanNames, getLightsaberScores, getStats };
