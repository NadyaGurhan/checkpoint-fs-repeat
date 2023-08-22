// const { log } = require('console');
const { log } = require('console');
const fs = require('fs');

const crewArr = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n');
const crew = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');

function getPadawanNames() {
  const arr = [];
  for (let i = 0; i < crewArr.length - 1; i++) {
    arr.push(crewArr[i]);
  }

  return arr;
}
getPadawanNames();

function getLightsaberScores() {
  const arr = [];
  for (let i = 0; i < crewArr.length - 1; i++) {
    arr.push(Number(crew[i]));
  }
  console.log(arr);

  return arr;
}
getLightsaberScores();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
