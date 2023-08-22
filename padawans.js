const fs = require("fs");

const getPadawanNames = () => {
  return fs.readFileSync("./data/padawans.txt", "utf-8").trim().split("\n");
};

const getLightsaberScores = () => {
  return fs
    .readFileSync("./data/scores.txt", "utf-8")
    .trim()
    .split("\n")
    .map((el) => Number(el));
};

const getStats = () => {
  const result = [];
  const padawan = getPadawanNames();
  const scores = getLightsaberScores();

  for (let i = 0; i < 4; i++) {
    result[i] = [];
    result[i][0] = padawan[i];
    result[i][1] = scores[i];
  }

  return result;
};

const writeStats = (arr) => {
  if (fs.existsSync("./data/stats.txt")) {
    fs.unlinkSync("./data/stats.txt");
  }

  let result = [];

  for (let i = 0; i < 4; i++) {
    result[i] = arr[i].join(" ");
  }

  console.log(result);

  fs.writeFileSync("./data/stats.txt", result.join("\n"));
};

test = [
  ["Revan", 99.9],
  ["Bastila Shan", 92],
  ["Jolee Bindo", 87],
  ["Juhani", 82],
];

writeStats(test);

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
