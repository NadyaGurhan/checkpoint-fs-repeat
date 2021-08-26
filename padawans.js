const fs = require("fs");


function getPadawanNames() {
  const readFilePadaw = fs.readFileSync("./data/padawans.txt", "utf-8");
  return readFilePadaw.split('\n');
}

function getLightsaberScores() {
const  readFileSync = fs.readFileSync("./data/scores.txt", "utf-8");
let result = readFileSync.split('\n');
const resArr = result.map(elem => {
  return +elem;
})

  return resArr;
}

function getStats() {
 const filePadawans = fs.readFileSync("./data/padawans.txt", "utf-8");
 const fileScore = fs.readFileSync("./data/scores.txt", "utf-8");
 let arrFilePadawans = filePadawans.split('\n');
 let arrFileScore = fileScore.split('\n');
 let result = []
  for (let i = 0; i < arrFilePadawans.length; i++){
    for (let j = 0; j < arrFileScore.length; j++){
      result.push(arrFilePadawans[i].concat(arrFileScore[j]));
    }
  }
  let resultFinaly = result.splice(0,4);
  let resultFinalySplit = resultFinaly.join('').split('');



  return resultFinalySplit;
}

console.log(getStats())




function  writeStats(){

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
