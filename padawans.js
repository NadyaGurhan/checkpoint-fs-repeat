const fs = require('fs');
let file = fs.readFileSync("./data/padawans.txt", "utf-8");
let file2 = fs.readFileSync("./data/scores.txt", "utf-8");




function getPadawanNames() {
  let arr = file.split('\n');
  arr.pop()
  return arr;
}

function getLightsaberScores() {
  let arr = file2.split('\n');
  return arr.map(el => {
    return Number(el)
  })
}

function getStats() {
  let arr = file.split('\n');
  arr.pop()
  let arr2 = file2.split('\n');
  let arr2New = arr2.map(el => {
    return Number(el)
  })
  let arr3 = [];

  for (let i = 0; i < arr.length; i++) {
    let arr4 = [];
    arr4.push(arr[i]);
    arr4.push(arr2New[i]);
    arr3.push(arr4);

  }
  return arr3;

}

function writeStats() {
  let arr = file.split('\n');
  arr.pop()
  let arr2 = file2.split('\n');
  let arr2New = arr2.map(el => {
    return Number(el)
  })
  let arr3 = [];

  for (let i = 0; i < arr.length; i++) {
    let arr4 = [];
    arr4.push(arr[i]);
    arr4.push(arr2New[i]);
    arr3.push(arr4);

  }


  for (let i = 0; i < arr3.length; i++) {
    fs.appendFileSync(`./data/stats.txt`, `${arr3[i]}\n`);
  }
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
