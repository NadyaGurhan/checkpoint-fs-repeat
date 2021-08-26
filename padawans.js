const fs = require('fs');

let getPadawanNames = ()=>{
  
  let string = fs.readFileSync('./data/padawans.txt', 'utf-8')
  let arr = string.split('\n')
  arr.pop()
  return arr
}
let getLightsaberScores = () =>{
  let string = fs.readFileSync('./data/scores.txt', 'utf-8')
  let arr = string.split('\n')
  result = []
  for (el of arr){
    result.push(+el)
  }
  return result

}
let getStats = () => {
  let arrOfPadawans = getPadawanNames();
  let score = getLightsaberScores();
  let result = []
  for(i = 0; i< arrOfPadawans.length; i++){
    result.push([arrOfPadawans[i],score[i]])
  }
  writeStats(result)
  return result
}

function writeStats(stats){
  let result = stats.join('\n').replace(/,/g, ' ')
  fs.writeFileSync('./data/stats.txt', result)
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
