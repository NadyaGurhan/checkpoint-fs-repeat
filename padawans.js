const fs=require('fs');
const getPadawanNames =()=>{
  return fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
}
const getLightsaberScores=()=>{
  return fs.readFileSync('./data/scores.txt', 'utf-8').trim().split('\n').map(el=>Number(el));
}
const getStats=()=>{
  const names=getPadawanNames();
  const scores=getLightsaberScores();
  const stats=[];
  for (let i=0; i<names.length; i++){
    stats.push([names[i], scores[i]])
  }
  return stats;
}

const writeStats=()=>{
  const arr=getStats();
  fs.writeFileSync('./data/stats.txt', arr.join('\n').replace(/\,/mgi, ' '));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
