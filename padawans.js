// const { fstat } = require("graceful-fs");

const fs = require("fs")
function getPadawanNames() {
  // let fileNames = './data/padawans.txt'
  let names = fs.readFileSync('./data/padawans.txt', "utf8");
  console.log(names.split('\n').pop())
  return names.split('\n').pop()

}

function getLightsaberScores() {
}
function getStats(){

}
function writeStats(){

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};