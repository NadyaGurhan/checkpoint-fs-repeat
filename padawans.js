const fs = require('fs')
const { EOL } = require('os');
const { resourceLimits } = require('worker_threads');
const padawans = fs.readFileSync('./data/padawans.txt', "utf8").split(EOL);
const scores = fs.readFileSync('./data/scores.txt', "utf8").split(EOL);

function getPadawanNames (){
  const res = padawans.map(el => el.split(','))
  const arr1 = res.map(el => el.join(',')).slice(0, 4)
  return arr1;
}
console.log(getPadawanNames())


function getLightsaberScores(){
const res = scores.map(el => el.split(','))
const arr2 = res.map(el => Number(el))
return arr2;
}
console.log(getLightsaberScores())

function getStats(){
let newArr = []
  const res1 = padawans.map(el => el.split(','))
  const arr1 = res1.map(el => el.join(',')).slice(0, 4)
  const res2 = scores.map(el => el.split(','))
  const arr2 = res2.map(el => Number(el))
  let arr = [];
  for (let i = 0; i< arr1.length; i++ ){
    arr.push(arr1[i], arr2[i])
  }
return arr;
}
console.log(getStats())

function writeStats(){
  
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
