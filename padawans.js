const fs = require("fs");

// getPadawanNames возвращает список падаванов из файла `data/padawans.txt`'
function getPadawanNames () {
  return  fs.readFileSync('data/padawans.txt','utf-8').trim().split('\n');
};

// getPadawanScores возвращает оценки владения световым мечом из файла `data/scores.txt'
function getLightsaberScores () {
  return  fs.readFileSync('data/scores.txt', 'utf-8').trim().split('\n').map(el=>Number(el));
};

// getStats возвращает таблицу соответствия падавана и оценки владения световым мечом
function getStats () {
  let stats = [];
  let names = getPadawanNames();
  let scores = getLightsaberScores();
  for (let i = 0; i < names.length; i += 1){
    stats.push([names[i],scores[i]]);
  }
  return stats;
}


// writeStats сохраняет статистику в файл `'data/stats.txt'
function writeStats () {
  let statsArr = getStats()
  let preresult;
  for (let i = 0; i < statsArr.length; i += 1) {
    if (i == statsArr.length-1){
      preresult=fs.appendFileSync('data/stats.txt', `${statsArr[i].join(' ')}`)
    }else{
      preresult=fs.appendFileSync('data/stats.txt', `${statsArr[i].join(' ')}\n`)
    }
  }
  return preresult
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

