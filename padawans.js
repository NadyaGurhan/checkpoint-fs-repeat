const fs = require("fs");
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const readPadawans = fs.readFileSync(
    __dirname + "/data/padawans.txt",
    "utf8"
  ); //чтение данных из файла
  const padawanArr = readPadawans.split("\n"); // преобразование списка падаванов в массив
  return padawanArr;
}
getPadawanNames();

function getLightsaberScores() {
  const readScores = fs.readFileSync(__dirname + "/data/scores.txt", "utf8");
  const scoresArr = readScores.split("\n");
  for (let i = 0; i < scoresArr.length; i++) {
    scoresArr[i] = +scoresArr[i];
  }
  return scoresArr;
}
getLightsaberScores();
function getStats() {}
function writeStats() {}
