const fs = require('fs');

const path = './data/';

const getPadawanNames = () => {
  const padawans = fs.readFileSync(`${path}padawans.txt`, 'utf-8').split('\n');
  padawans.pop();

  return padawans;
};

// getPadawanNames(padawans);

const getLightsaberScores = () => {
  const score = fs.readFileSync(`${path}scores.txt`, 'utf-8').split('\n');
  return score.map((item) => Number(item));
};
// console.log()

const getStats = () => {
  const newArr = [];

  const arr1= getPadawanNames()
  const arr2= getLightsaberScores()

 
  for (let i = 0; i < arr1.length; i += 1) {
    newArr.push(`${arr1[i]}, ${Number(arr2[i])}`)
  }
  console.log(newArr)
  return newArr
   
};

// getStats(getPadawanNames(), getLightsaberScores())

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
