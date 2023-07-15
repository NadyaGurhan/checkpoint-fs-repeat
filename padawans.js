const fs = require('fs')

module.exports = {
  getPadawanNames,

  getStats,
  writeStats,
};

// 'getPadawanNames возвращает список падаванов из файла `data/padawans.txt`'

function getPadawanNames() {
  let fileContentnNames = fs.readFileSync('./data/padawans.txt', 'utf8').split("\n");
  return fileContentnNames;
}
// console.log(getPadawanNames())

// getPadawanScores возвращает оценки владения световым мечом из файла `data/scores.txt`

function getPadawanScores() {
  let fileContentnScores = fs.readFileSync('./data/scores.txt', 'utf8').split("\n").map((el) => Number(el));
    return fileContentnScores;
}
// console.log(getPadawanScores())

// getStats возвращает таблицу соответствия падавана и оценки владения световым мечом

let padawanScoresArr = (getLightsaberScores());

function getStats () {
  let stats = [];
    for (let i = 0; i < padawanNamesArr.length; i ++ ){
        const newArr = [];
        newArr.push(padawanNamesArr[i], padawanScoresArr[i]);
        stats.push(newArr);
    }
    return stats
}

// console.log(getStats ())

// writeStats сохраняет статистику в файл `data/stats.txt

function writeStats () {
  let newStr = "";
  let statsStr = getStats();
  for (let i = 0; i < statsStr.length; i++) {
      newStr = newStr + "\n" + statsStr[i].join(" ");
  }
  fs.writeFileSync(`${__dirname}/data/stats.txt`, newStr);
}
writeStats ()