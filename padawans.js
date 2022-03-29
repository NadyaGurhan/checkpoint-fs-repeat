const fs = require("fs");
const padawans = "./data/padawans.txt";
const dataJedi = fs.readFileSync(padawans, "utf8");
const scores = "./data/scores.txt";
const dataScores = fs.readFileSync(scores, "utf8");

function getPadawanNames() {
  const result = dataJedi.split("\n");
  // return dataJedi.split('\n').pop() выводило пустоту
  result.pop();
  return result;
}
console.log(getPadawanNames());

function getLightsaberScores() {
  return dataScores.split("\n");
}
console.log(getLightsaberScores());

function getStats() {
  const jedi = getPadawanNames();
  const saber = getLightsaberScores();
  const newArray = jedi
    .map((el) => el.split(", "))
    .concat(saber.map((el) => el.split(", ")));
  return (result = newArray.reduce(acc));
}
console.log(getStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
