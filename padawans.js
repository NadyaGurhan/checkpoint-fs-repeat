const fs = require("fs");

// getPadawanNames возвращает список падаванов из файла `data/padawans.txt`'
function getPadawanNames (path) {
  return  fs.readFileSync(path,'utf-8').trim().split('\n');
};

// getPadawanScores возвращает оценки владения световым мечом из файла `data/scores.txt'
function getLightsaberScores (path) {
  return  fs.readFileSync(path,'utf-8').trim().split('\n');
};

// getStats возвращает таблицу соответствия падавана и оценки владения световым мечом
function getStats (names, scores) {
  let stats = [];
  for (let i = 0; i < names.length; i += 1){
    stats.push([names[i],scores[i]]);
  }
  return stats;
}


// writeStats сохраняет статистику в файл `data/stats.txt'
function writeStats (statsArr, path) {
  for (let i = 0; i < statsArr.length; i += 1) {
    fs.appendFileSync(path, `${statsArr[i].join(' ')}\n`);
  }
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};


/*
names = getPadawanNames('data/padawans.txt')
scores = getLightsaberScores('data/scores.txt')
stats = getStats (names, scores)
writeStats (stats,'data/stats.txt')*/
