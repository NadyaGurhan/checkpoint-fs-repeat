const fs = require('fs')

function getPadawanNames(){
  const padawans = fs.readFileSync('./data/padawans.txt','utf8').split('\r\n');
  return padawans;
}

function getLightsaberScores(){
  const scores = fs.readFileSync('./data/scores.txt','utf8').split('\r\n');
  const result = scores.map((el)=>Number(el));
  return result;
}

function getStats(){
  const resultArr = [];
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  for(let i=0;i<padawans.length;i+=1){
    resultArr.push([padawans[i],scores[i]]);

  }
  return resultArr;
}
function writeStats(){
  //мыслей насчет избавления от этой запятой между много, но времени мало
  const results = getStats().join('\n');

  fs.writeFileSync('./data/stats.txt',results ,'utf8')
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
