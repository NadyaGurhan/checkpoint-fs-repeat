const fs = require('fs')


function getPadawanNames(){
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf8');
  return padawans.trim().split('\n')
}


function getLightsaberScores(){
  const scores = fs.readFileSync('./data/scores.txt', 'utf8');
  return scores.trim().split('\n').map(x=>Number(x));
}

function getStats(){
  let names = getPadawanNames();
  let scores = getLightsaberScores();
  let stats = [];
  let i = 0;
  while (i<names.length){
    let arr = [];
    arr.push(names[i]);
    arr.push(scores[i]);
    if(arr.length){
      stats.push(arr)
    }
    i++;
  };
  return stats
}




module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};