const { isUtf8 } = require("buffer");
const { log } = require("console");
const fs = require("fs");
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const zero = "";
  const result = [];
  let string = fs.readFileSync("./data/padawans.txt", { encoding: "utf8" });
  let parse = string.split("\n");
  for (let i = 0; i < parse.length; i++) {
    if (parse[i] != "") {
      result.push(parse[i]);
    }
  }
  return result;
}

function getLightsaberScores() {
  const result = [];
  let string = fs.readFileSync("./data/scores.txt", { encoding: "utf8" });
  let num = string.split("\n");
  for (let i = 0; i < num.length; i++) {
    result.push(+num[i]);
  }
  return result;
}

function getStats() {
  const result = [];
  const finalResult = [];
  const scores = fs.readFileSync("./data/scores.txt", { encoding: "utf8" });
  const padawans = fs.readFileSync("./data/padawans.txt", { encoding: "utf8" });
  const ScoresArr = scores.split("\n");
  const PadawansArr = padawans.split("\n").filter((el) => el !== "");
  PadawansArr.map((el, i) => {
    return result.push(el, Number(ScoresArr[i]));
  });
  for (let i = 0; i < PadawansArr.length; i += 1) {
    finalResult.push(result.splice(0, 2));
  }
  return finalResult;
}
console.log(getStats());

function writeStats() {
  const scores = fs.readFileSync("./data/scores.txt", { encoding: "utf8" });
  const padawans = fs.readFileSync("./data/padawans.txt", { encoding: "utf8" });
  const ScoresArr = scores.split("\n");
  const PadawansArr = padawans.split("\n").filter((el) => el !== "");
  const resArr = PadawansArr.map((el, i, arr) => {
    if (i !== arr.length - 1) {
      return (el = el + " " + ScoresArr[i] + "\n");
    } else return (el = el + " " + ScoresArr[i]);
  });
  const string = resArr.join("");
  try {
    fs.writeFileSync("./data/stats.txt", string);
    console.log("Данные успешно записаны в файл!");
  } catch (error) {
    console.error("Не удалось записать данные: " + error);
  }
  return resArr;
}
