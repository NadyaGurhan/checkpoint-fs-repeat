const fs = require('fs');


function getPadawanNames() {
  let filePath = '/home/aizana/elbrus/checkpoint-fs/data/padawans.txt';
 let data = fs.readFileSync(filePath, 'utf-8').split("\n").slice(0, -1)
 return data
}
function getLightsaberScores(){
  let filePath = 'data/scores.txt';
  let newArr = []
  let data1 = fs.readFileSync(filePath, 'utf-8').split("\n");
    for (let i = 0; i < data1.length; i++) {
      newArr.push(Number(data1[i]))
    }
     return newArr
}
function getStats(){
let names =  getPadawanNames()
let scores =  getLightsaberScores()
let stats = names.map((el, index) => [el, scores[index]])
return stats
}
function writeStats(){
  return fs.writeFileSync('data/stats.txt', data, {});

}






module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
