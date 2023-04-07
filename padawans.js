const fs = require('fs')

const filePath = "./data/padawans.txt";
const data = fs.readFileSync(filePath, "utf8")

function getPadawanNames() {
  return data.split('\n').slice(0, -1);
}

const filePath1 = "./data/scores.txt";
const data1 = fs.readFileSync(filePath1, "utf8")

function getLightsaberScores() {
  let arr = data1.split('\n');
  const arrOfNumbers = arr.map(str => parseFloat(str));
  return arrOfNumbers
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
//   //   // getStats,
//   //   // writeStats,
};
