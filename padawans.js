const fs=require('fs')

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames(){
  const padawans=fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  padawans.pop();
  return padawans;
}

function getLightsaberScores(){
  const scores=fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  return scores.map((el)=>parseFloat(el));
  //  return scores.map((el)=>Number(el));
  //  return scores.map((el)=>+el);
}
function getStats(){
  const fullName=getPadawanNames();
  const fullScore= getLightsaberScores();
  return fullName.map((el, index)=>[el,fullScore[index]]);
}

function writeStats(){
  const stats=getStats().map((el)=>el.join(',').replace(/,/g, ' ')).join('\n');
  fs.writeFileSync('./data/stats.txt',stats);
}
