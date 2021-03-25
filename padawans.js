const fs = require('fs')
function getPadawanNames(){
  return fs.readFileSync('./data/padawans.txt','utf-8').split('\n')
}
function getLightsaberScores() {
  let arr = fs.readFileSync('./data/scores.txt','utf-8').split('\n')
  for (let i = 0; i < arr.length; i++) {
    arr[i] = +arr[i];
  }
  return arr
}
function getStats(){
  const arr1 = getPadawanNames()
  // console.log(arr1)
  const arr2 = getLightsaberScores()
  // console.log(arr2)
  let arr3=[]
  for (let i = 0; i < arr1.length; i++) {
    arr3.push([arr1[i],arr2[i]])
  }
return arr3
}
function writeStats(){
  let arr = getStats()
  for (let i = 0; i < arr.length; i++) {
    arr[i]=arr[i].join(' ')
    console.log(arr) 
  }
  fs.writeFileSync('./data/stats.txt',arr.join('\n'))
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
// console.log(getStats())
writeStats()
