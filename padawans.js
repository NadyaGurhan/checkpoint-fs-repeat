const fs = require('fs');
 function getPadawanNames() {
   let str = fs.readFileSync(`data/padawans.txt`, 'utf-8');
   return str.replace(/\n/g, ',').split(',').splice(0,4);
 }

 function getLightsaberScores() {
   let str = fs.readFileSync(`data/scores.txt`, 'utf-8');
   return str.replace(/\n/g, ',').split(',').splice(0,4).map(el => +el);
 }

 function getStats() {
   const names = getPadawanNames();
   const scores =  getLightsaberScores();
   let newArr = names.map((elem, index) => (elem + ','+ scores[index]).split(','));
   for (let i = 0; i<newArr.length; i++) {
     for(let j = 0; j < newArr[i].length; j++) {
       if (j = 1){newArr[i][j]= +newArr[i][j]}
     }
   }

return newArr
 }

 function writeStats() {
  fs.appendFileSync(`data/stats.txt`, `${getStats()}`);
 }

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
console.log(getPadawanNames())
console.log(getLightsaberScores())
console.log(getStats())
