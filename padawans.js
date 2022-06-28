const fs = require('fs');
  function getPadawanNames () {
    const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');

return padawans
;
}
console.log(getPadawanNames());

function getLightsaberScores () {
  const scores = fs.readFileSync('./data/scores.txt','utf-8').trim().split('\n').map(el => +el); 
  return scores;
 };


 function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  let stats = names.map((el,index) => {
let masStats=[];
masStats.push(names[index],scores[index]);
return masStats;
  })
  return stats;
 }
 console.log(getStats())

 function writeStats () {
 const dataList = getStats().map(el => el.join(' ')).join('\n')
 fs.writeFileSync('data/stats.txt', dataList)
 return dataList;

 }
 console.log(writeStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
