const fs = require('fs');
// создание первого массива из файла padawans
// const arrOf1 = fs.readFileSync('./data/padawans.txt', 'utf8');
// const padawans = arrOf1.split('\n');
// const arrOf1 = fs.readFileSync('./data/padawans.txt', 'utf8');
// const padawans = arrOf1.split('\n');
// padawans.pop();
// console.log(padawans);
function getPadawanNames() {
  const arrOf1 = fs.readFileSync('./data/padawans.txt', 'utf8');
  const padawans = arrOf1.split('\n');
  padawans.pop();
  return padawans;
}

// console.log(arrScores);
function getLightsaberScores() {
  const arrOf2 = fs.readFileSync('./data/scores.txt', 'utf8');
  const scores = arrOf2.split('\n');
  const arrScores = scores.map((number) => {
    return Number(number);
  })
  return arrScores;
}
// не совсем правильно, но все же
function getStats() {
  const arr1 = getPadawanNames();
  const arr2 = getLightsaberScores();
  const arr3 = arr1.map((person, index) => {
    return `${person}, ${arr2[index]}`
  })
  return arr3;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
