const { log, Console } = require('console');
const fs = require('fs')
const path = require('path')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames () {
  const fileName = './padawans.txt';
  const pathToFile = path.join(__dirname, 'data', fileName);
  const readMe = fs.readFileSync(pathToFile, 'utf-8').trim();
  const arr = readMe.split('\n')
  return arr;
};
getPadawanNames();

function getLightsaberScores () {
  const fileName = './scores.txt';
  const pathToFile = path.join(__dirname, 'data', fileName)
  const readMe = fs.readFileSync(pathToFile, 'utf-8').trim()
  const arr = readMe.split('\n').map(Number)
  return arr;
}

function getStats () {
  const fileName = './padawans.txt'
  const fileName2 = './scores.txt'
  const pathToFile = path.join(__dirname, 'data', fileName)
  const pathToFile2 = path.join(__dirname, 'data', fileName2)
  const readMe = fs.readFileSync(pathToFile, 'utf-8').trim()
  const readMe2 = fs.readFileSync(pathToFile2, 'utf-8').trim()

  const arr = readMe.split('\n');
  const arr2 = readMe2.split('\n').map(Number);

  const newArr = arr.map((el, index) => {
return [el, arr2[index]]
  })
  return newArr;
}

function writeStats () {
  const fileName = './padawans.txt'
  const fileName2 = './scores.txt'
  const pathToFile = path.join(__dirname, 'data', fileName)
  const pathToFile2 = path.join(__dirname, 'data', fileName2)
  const readMe = fs.readFileSync(pathToFile, 'utf-8').trim()
  const readMe2 = fs.readFileSync(pathToFile2, 'utf-8').trim()

  const arr = readMe.split('\n');
  const arr2 = readMe2.split('\n').map(Number);

  const newArr = arr.map((el, index) => `${el} ${arr2[index]}`) 

  const newFile = newArr.join('\n')
  const createFile = fs.appendFileSync('./data/stats.txt', newFile)
}
