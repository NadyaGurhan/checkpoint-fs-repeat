


const fs = require('fs')
const { encode } = require('punycode')
// module.exports = {
// //   getPadawanNames,
// //   getLightsaberScores,
// //   getStats,
// //   writeStats,
// // };

const readFile = fs.readFileSync('./data/padawans.txt','utf-8')

function getPadawanNames(readFile){
    let x = readFile.split(' ')
    console.log(x)
}
getPadawanNames(readFile)

