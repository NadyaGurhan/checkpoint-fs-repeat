const fs = require("fs");
const padawans = fs.readFileSync(`./data/padawans.txt`, "UTF-8").split('\n');
const scores = fs.readFileSync(`./data/scores.txt`, "UTF-8").split('\n');

function getPadawanNames(){
  const arr = padawans;
  if(arr.length > 4){
  arr.length = arr.length-1
  return arr
  }else{
    return arr
  }
}
function getLightsaberScores(){
  const arr = scores;
  let result = []
  for(let i = 0;i < arr.length;i++){
    result.push(+arr[i])
  }
  return result

}

function getStats(){
  let str = getPadawanNames();
  let num = getLightsaberScores();
  let res = []
  for(let i = 0;i < str.length;i++){
    res.push([str[i],num[i]])
  }
  
    return res;
}
function writeStats(stats){
  stats = getStats().map(el => el[0] + " " + el[1]).join("\n");
  return fs.writeFileSync('data/stats.txt', stats);
}



module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
