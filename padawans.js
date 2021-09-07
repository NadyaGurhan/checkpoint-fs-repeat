const fs = require("fs");
let padawanNames = fs.readFileSync("./data/padawans.txt", "utf8").toString().split('\n').slice(0,-1);

let lightsaberScores = fs.readFileSync("./data/scores.txt", "utf8").toString().split('\n').map(item => +item);


let getPadawanNames = () => {
  return padawanNames
}

let getLightsaberScores = () => {
  return lightsaberScores
}

let getStats = () => {
   statsArr = []
   for (let i = 0; i < padawanNames.length; i++){
     statsArr.push([`${padawanNames[i]}`, +`${lightsaberScores[i]}`])
   }
    return statsArr

}
console.log(getStats())



module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};


