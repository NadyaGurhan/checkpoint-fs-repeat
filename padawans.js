const fs = require("fs");
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
function getPadawanNames() {
  // функция вернет имена
  return fs.readFileSync("./data/padawans.txt", "utf-8").trim().split("\n");
}
// console.log(getPadawanNames());
function getLightsaberScores() {
  let res = [];
  let arr = fs.readFileSync("data/scores.txt", "utf-8").trim().split("\n");
  for (let i = 0; i < arr.length; i++) {
    res.push(Number(arr[i]));
  }
  return res;
}
// console.log(getLightsaberScores());

function getStats() {
  //не обязательно объявлять аргмументы в скобках, т.к.. Они будут внутри функции
  let result = [];
  let a = getPadawanNames(); // получается можно результаты описанных выше функций представить как пере менные и эти результаты сразу будут работать как аргменты внутри новой функции
  let b = getLightsaberScores();
  for (let i = 0; i < a.length; i++) {
    result.push([a[i], b[i]]);
  }
  return result;
}
console.log(getStats());

function writeStats() {
  let c = getStats();
  let str = "";
  for (let i = 0; i < c.length; i++) {
    str = str + c[i] + "\n";
  }
  //  str.slice(0, -1).replace(/,/g, " ");
  // return fs.appendFileSync("data/stats.txt");
  fs.appendFileSync(
    `./data/stats.txt`,
    `${str.slice(0, -1).replace(/,/g, " ")}`
  );
}
// writeStats(); // ВАЖНО. ЧЕКПОИНТ нас не просит, чтобы мы самы напечатали новй файл при вызове функции writeStats() в терминале. Но если бы было нужно по команде node padawans.js ее вызвать, то тогда нужно писать в файле вот это  writeStats(); НО не консл.логб т.к. эта функция ничего не возвращает, она только печататает через fs
//
