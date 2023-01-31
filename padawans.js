const fs = require("fs");

// let fileContent = fs.readFileSync("hello.txt", "utf8");
// на основе строки выше:
let getPadawanNames = fs
  .readFileSync("./data/padawans.txt", "utf8")
  .split("\n"); //.join(", ");
// console.log(getPadawanNames);
// Вроде получилось получить [ 'Revan', 'Bastila Shan', 'Jolee Bindo', 'Juhani' ] (удалил 5ю строку в txt - он выводился как пустая строка, пятым элементом)

let getLightsaberScores = fs
  .readFileSync("./data/scores.txt", "utf8")
  .split("\n");

// не успеваю боюсь, поэтому рассуждения - написать цикл который прогонит каждый элемент [ '99.9', '92', '87', '82' ]
// и выведет его из строкового значения. И вернуть этот массив не из строковых и численных элементов
console.log(getLightsaberScores);

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
