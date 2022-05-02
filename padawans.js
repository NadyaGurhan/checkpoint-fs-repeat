const { kStringMaxLength } = require("buffer");
const fs = require("fs");

function getPadawanNames() {
  const data = fs.readFileSync("./data/padawans.txt", "utf8");
  const padawans = data.split("\n");
  padawans.pop();
  return padawans;
}

function getLightsaberScores() {
  const data1 = fs.readFileSync("./data/scores.txt", "utf8");
  const scores = data1.split("\n").map((el) => Number(el));
  return scores;
}
function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  return padawans.map((elem, index) => [`${elem}`, scores[index]]);
  // const asd = []
  // padawans.forEach((elem, index) => {
  //   const temp = []
  //   temp.push(`${elem}`, scores[index])
  //   asd.push(temp)
  // })
}

function writeStats() {
const stat = getStats();

let data = stat.join('\n')
let data1 = data.split(',')
let data2 = data1.join(' ')
console.log(data);
console.log(data1);
console.log(data2);

const res = fs.writeFileSync("data/stats.txt", data2);

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
