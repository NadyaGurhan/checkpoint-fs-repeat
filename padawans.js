const fs = require('fs')
let filePath1 = "./data/padawans.txt"
let data1 = fs.readFileSync('./data/padawans.txt')

function getPadawanNames(data1){
let result = data1.toString()
let result1 = result.split('/n')
return result1
}

function getLightsaberScores(){

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
