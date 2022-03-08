const fs = require("fs");
const padawans = fs.readFileSync('data/padawans.txt', 'utf-8').trim().split('\n');
console.log(padawans);
const scores = fs.readFileSync('data/scores.txt', 'utf-8').trim().split('\n');
console.log(scores);



// getPadawanNames возвращает список падаванов из файла `data/padawans.txt`'
function getPadawanNames (padawansArr, path){
    for (let i = 0; i < padawansArr.length; i += 1) {
      fs.appendFileSync(path, `${padawans[i]}\n`);
    }
  }
  
// getPadawanScores возвращает оценки владения световым мечом из файла `data/scores.txt
function getLightsaberScores (scoresArr, path){
  for (let i = 0; i < scoresArr.length; i += 1) {
    fs.appendFileSync(path, `${scoresArr[i]}\n`);
  }
}

// getStats возвращает таблицу соответствия падавана и оценки владения световым мечом
function getStats (padawans, scores) {
  let stats = [];
  for (let i = 0; i < padawans.length; i += 1){
    stats.push(padawans[i]+' '+scores[i]);
  }
  return stats;
}

// writeStats сохраняет статистику в файл `data/stats.txt
function writeStats (statsArr, path) {
  for (let i = 0; i < statsArr.length; i += 1) {
    fs.appendFileSync(path, `${statsArr[i]}\n`);
  }
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
