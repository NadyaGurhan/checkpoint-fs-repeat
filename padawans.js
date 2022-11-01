const fs = require('fs')
module.exports = {
 
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
function getPadawanNames() {
   return fs.readFileSync(`data/padawans.txt`, 'utf8').split('\n').filter(el => el)
}

function getLightsaberScores () {
return fs.readFileSync(`data/scores.txt`, 'utf-8').split('\n').map(el => +el)

}
function getStats() {
 const arr1 = getPadawanNames();
 const arr2 = getLightsaberScores ();
 let arr3 = []
 for(let i = 0; i < arr1.length; i++) {
  arr3.push([arr1[i],arr2[i]])
 }
 return arr3
}

function writeStats(stats) {
  const str = stats.join('\n').replace(/\,/gmi, ' ')
 
 return  fs.writeFileSync('data/stats.txt', `${str}`,'utf-8')


}