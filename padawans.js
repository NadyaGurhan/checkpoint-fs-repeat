const fs = require("fs");
const padawans = fs.readFileSync('./data/padawans.txt', 'utf8');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
const arrNum = scores.split('\n');


function getPadawanNames() {
  
  let arr = padawans.split('\n');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '') {
      let result = arr.splice([i], 1)
    }
}
 return arr;
} 

function getLightsaberScores() {
  let resArr = [];
  for (let i = 0; i < arrNum.length; i++) {
    resArr.push(Number(arrNum[i]));
  }
  return resArr;
}

function getStats() {
  const arrResult = [];
  const getResult = [];
  for (let i = 0; i < getPadawanNames().length; i++) {
    getResult.push(arrResult.concat(getPadawanNames()[i], getLightsaberScores()[i]));
  }
  return getResult;
}

function writeStats() {
  const arr = getStats().map((element) => element.join(' ') ).join('\n');
  fs.appendFileSync('data/stats.txt', `${arr}`, 'utf-8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
