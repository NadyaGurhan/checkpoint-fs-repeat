const fs = require("fs");
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const path = "./data/padawans.txt";
  const data = fs.readFileSync(path, "utf-8");
  let arr = data.split("\n");
  arr.pop();
  return arr;
}

function getLightsaberScores() {
  const path = "./data/scores.txt";
  const data = fs.readFileSync(path, "utf-8");
  let nums = data.split("\n");
  return nums.map((n) => Number(n));
}

function getStats() {
  const path = "./data/padawans.txt";
  const data = fs.readFileSync(path, "utf-8");
  let arr = data.split("\n");
  arr.pop();
  const path1 = "./data/scores.txt";
  const data2 = fs.readFileSync(path1, "utf-8");
  let nums = data2.split("\n");
  nums = nums.map((n) => Number(n));

  let result = nums.map((item, index) => [arr[index], item]);
  return result;
}

function writeStats() {
  const path = "./data/padawans.txt";
  const data = fs.readFileSync(path, "utf-8");
  let arr = data.split("\n");
  arr.pop();
  const path1 = "./data/scores.txt";
  const data2 = fs.readFileSync(path1, "utf-8");
  let nums = data2.split("\n");
  nums = nums.map((n) => Number(n));

  let result = nums.map((item, index) => [arr[index], item]);

  let statistic = result.map((item) => item.join(" ")).join("\n");

  const directory = "data";
  const fileName = `${directory}/stats.txt`;
  const content = statistic;

  fs.writeFile(fileName, content, (err) => {
    if (err) {
      return "Ошибка записи файла:", err;
    }
    return "Файл успешно создан!";
  });
}

console.log(writeStats());
