const fs = require('fs');

function getPadawanNames() {
  const smth = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const names = smth.split('\n');
  return names;
}

console.log(getPadawanNames());

function getLightsaberScores() {
  const smth = fs.readFileSync('./data/scores.txt', 'utf-8');
  const arr = smth.split('\n');
  const numArr = [];
  for (let i = 0; i < arr.length; i++) {
    numArr.push(Number(arr[i]));
  }
  return numArr;
}

console.log(getLightsaberScores());

function getStats() {
  const smth2 = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const names2 = smth2.split('\n');

  const smth3 = fs.readFileSync('./data/scores.txt', 'utf-8');
  const arr2 = smth3.split('\n');
  const numArr2 = [];
  for (let i = 0; i < arr2.length; i++) {
    numArr2.push(Number(arr2[i]));
  }
  const newArr = []
  //   for (let i = 0; i < names2.length; i++) {
  //     for (let j = 0; j < numArr2.length; j++) {
  //       newArr.push(names2[i].concat(numArr2[j]))
  //     }
  //   }
  newArr.push([names2.slice(0, 1).join("") + ", " + numArr2.slice(0,1)]) 
    newArr.push([names2.slice(1, 2).join("") + ", " + numArr2.slice(1,2)]) 
 newArr.push([names2.slice(2, 3).join("") + ", " + numArr2.slice(2, 3)]) 
  newArr.push([names2.slice(3, 4).join("") + ", " + numArr2.slice(3,4)]) 

  return newArr
}

console.log(getStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
