const fs = require("fs");
const { EOL } = require("os");

function getPadawanNames() {
  let padawans = fs.readFileSync(`${__dirname}/./data/padawans.txt`, "utf-8");
  return padawans.split(`${EOL}`).slice(0, 4);
}

// console.log(getPadawanNames());

function getLightsaberScores() {
  let scores = fs.readFileSync(`${__dirname}/./data/scores.txt`, "utf-8");
  return scores.split(`${EOL}`).map((el) => Number(el));
}

// console.log(getLightsaberScores());

function getStats() {
  let padawans = fs
    .readFileSync(`${__dirname}/./data/padawans.txt`, "utf-8")
    .split(`${EOL}`)
    .slice(0, 4);

  let scores = fs
    .readFileSync(`${__dirname}/./data/scores.txt`, "utf-8")
    .split(`${EOL}`)
    .map((el) => Number(el));

  let stats = padawans.map((el) => [el]);

  for (let i = 0; i < padawans.length; i += 1) {
    stats[i].push(scores[i]);
  }
  return stats;
}

// console.log(getStats());

function writeStats() {
  let padawans = fs
    .readFileSync(`${__dirname}/./data/padawans.txt`, "utf-8")
    .split(`${EOL}`)
    .slice(0, 4);

  let scores = fs
    .readFileSync(`${__dirname}/./data/scores.txt`, "utf-8")
    .split(`${EOL}`)
    .map((el) => Number(el));

  let data = "";
  for (let i = 0; i < scores.length; i += 1) {
    if (i < scores.length - 1) {
      data = data + padawans[i] + " " + scores[i] + "\n";
    } else {
      data = data + padawans[i] + " " + scores[i];
    }
  }

  return fs.writeFileSync(`${__dirname}/./data/stats.txt`, data);
}
console.log(writeStats());
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
