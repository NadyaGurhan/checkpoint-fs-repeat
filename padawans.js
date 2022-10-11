const fs = require('fs');
// let fileNames = "./data/padawans.txt";
// let data = fs.readFileSync(fileNames, "utf8");
// console.log(data);
// data = data + "my text";
// fs.writeFileSync(fileNames, data);

function getPadawanNames () {
  let arr = [];
  let fileNames = ("./data/padawans.txt");
  let data = fs.readFileSync(fileNames, "utf8");
  console.log(data);
  for(let i =0; i < data.length; i++){
    arr.push(data[i])
  }
 return arr;
}
function getLightsaberScores () {

}
function getStats (){

}
function writeStats (){

}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
