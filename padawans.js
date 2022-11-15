const fs = require("fs");

readFile = (path) => {
  let arr = fs.readFileSync(__dirname + path, "utf8").split("\n");
  return arr;
};

const getPadawanNames = () => {
  let res = readFile("/data/padawans.txt");
  res.pop();
  return res;
};

const getLightsaberScores = () => {
  let i = readFile("/data/scores.txt");
  let arr = [];
  i.forEach((element) => {
    arr.push(Number(element));
  });
  return arr;
};

const getStats = () => {
  let names = getPadawanNames();
  let sc = getLightsaberScores();
  let res = [];
  names.forEach((el, index) => {
    res.push([names[index], sc[index]]);
  });
  return res;
};

const writeStats = () => {
  let arr = getStats();
  let res = [];
  res = arr.map((i) => i.join(" ") + "\n");
  res = res.join(" ");
  fs.writeFileSync("stats.txt", res);

  return true;
};

console.log(writeStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
