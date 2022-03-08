const fs = require("fs");

// getPadawanNames возвращает список падаванов из файла `data/padawans.txt`'
function getPadawanNames (path) {
  return  fs.readFileSync(path,'utf-8').trim().split('\n');
};

// getPadawanScores возвращает оценки владения световым мечом из файла `data/scores.txt'
function getPadawanScores (path) {
  return  fs.readFileSync(path,'utf-8').trim().split('\n');
};

// getStats возвращает таблицу соответствия падавана и оценки владения световым мечом
function getStats (padawans, scores) {
  let stats = [];
  for (let i = 0; i < padawans.length; i += 1){
    stats.push([padawans[i],scores[i]]);
  }
  return stats;
}


// writeStats сохраняет статистику в файл `data/stats.txt'
function writeStats (statsArr, path) {
  for (let i = 0; i < statsArr.length; i += 1) {
    fs.appendFileSync(path, `${statsArr[i]}\n`);
  }
}


module.exports = {
  getPadawanNames,
  getPadawanScores,
  getStats,
  writeStats,
};

//writeStats (stats,'data/stats.txt')
//padawans = getPadawanNames('data/padawans.txt')
//scores = getPadawanScores('data/scores.txt')
//stats = getStats (padawans, scores)
