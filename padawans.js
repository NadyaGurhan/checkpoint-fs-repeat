const fs = require('fs');
const { EOL } = require('os');
const padawansNames =fs.readFileSync('./data/padawans.txt','utf-8')
function getPadawansNames (){
  const padawansArr = padawansNames.split(EOL).filter((names) => names.trim()!=='');
 return padawansArr;
}
function getLightsaberScores(){
const scores = fs.readFileSync('./data/scores.txt','utf-8')
return scores.split(',');
}
function getStats(){
const names =getPadawansNames() ;
const scores = getLightsaberScores();
const array =[];
return names.map((name,index) =>[name.scores[index]]);
}
function getStats(){;
writeStats(stats);
const data = fs.writeFileSync('data/stats.txt', 'utf-8').stats.join(EOL)
 return stats;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
