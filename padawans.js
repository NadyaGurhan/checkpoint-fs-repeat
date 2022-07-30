const fs = require('fs');

function getPadawanNames(){
  const arrNames = fs.readFileSync('../checkpoint-fs/data/padawans.txt', 'utf8');
  let resNames = arrNames.trim().split("\r\n");
  return resNames;
}

function getLightsaberScores(){
  const arrScores = fs.readFileSync('../checkpoint-fs/data/scores.txt', 'utf8');
  let resScores = arrScores.split("\r\n");
  let resScoresNum = resScores.map((item)=>{
    return +item;
  })
  return resScoresNum;
}

function getStats(){
  const arrScores = fs.readFileSync('../checkpoint-fs/data/scores.txt', 'utf8').split("\r\n");
  const padawans = fs.readFileSync('../checkpoint-fs/data/padawans.txt', 'utf8').trim().split("\r\n");
  let res = []; 
  padawans.map((item, i)=>{
    res.push([item, Number(arrScores[i])]);
  });
  return res;
}

function writeStats(stats){
  let print = stats.map((item, i)=>{
    return item.join(' ');
  })
  let res = print.join('\n');
  fs.appendFileSync('../checkpoint-fs/data/stats.txt', `${res}`);
  console.log(res);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
