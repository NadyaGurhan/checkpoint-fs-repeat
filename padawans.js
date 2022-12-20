const fs = require('fs')


function getPadawanNames(){
  let a = fs.readFileSync('data/padawans.txt', 'utf8');
  return a.toString().split('\n');
  // не понимаю почему не работает, не видит сепаратор "\n" ... возвращает просто пустую строку.
}

function getLightsaberScores(){
  let a = [];
  a = fs.readFileSync('data/scores.txt', 'utf8').toString().split("\n").map(el => Number(el));
  return a;

  // а здесь тоже самое сработало

}

function getStats(){
  let padawans = fs.readFileSync('data/padawans.txt', 'utf8').toString().split('\n');
  let scores = fs.readFileSync('data/scores.txt', 'utf8').toString().split("\n").map(el => Number(el));
  let res = [];
  for(let i = 0; i < scores.length; i++){
    res[i] = [];
  }

  for(let i = 0; i<scores.length; i++){
    res[i].push(padawans[i], scores[i]);
  }

  return res;
}

function writeStats(){
  return 1;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
