const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
// console.log(nameList);
function getPadawanNames() {
  newArr = [];
  const nameList = fs.readFileSync('data/padawans.txt', 'utf-8').split('\n');
  for (let i = 0; i < nameList.length; i += 1) {
    if (nameList[i].length > 0) {
      newArr.push(nameList[i]);
    }
  }
  // console.log(newArr);
  return newArr;
}
getPadawanNames();

function getLightsaberScores(scores) {
  const scoreList = fs.readFileSync('data/scores.txt', 'utf-8').split('\n');
  for (let i = 0; i < scoreList.length; i += 1) {
    scoreList[i] = Number(scoreList[i]);
  }
  // console.log(scoreList);
  return scoreList;
}
getLightsaberScores();

function getStats() {
  const newArr = getPadawanNames();
  const scoreList = getLightsaberScores();
  // console.log(scoreList);
  // console.log(newArr);
  const padawanList = [];
  for (let i = 0; i < newArr.length; i += 1) {
    padawanList.push([newArr[i], scoreList[i]]);
  }
  // console.log(padawanList);
  return padawanList;
}
getStats();

function writeStats() {
  let resultArr = [];
  const result = getStats();
  //console.table(result);
  // result.join('');
  //console.log(result[1].join(' '));
  for (let i = 0; i < result.length; i += 1) {
    resultArr.push(result[i].join(' '));
   // console.log(resultArr);
  }
  console.table(resultArr);
  for (let i = 0; i < resultArr.length; i += 1) { 
    if (i !== resultArr.length - 1){
    fs.appendFileSync('data/stats.txt', `${resultArr[i]}\n`); 
    } else {
      fs.appendFileSync('data/stats.txt', `${resultArr[i]}`); 
    }
  }
}

//writeStats();
