const fs = require('fs');

function getPadawanNames() {
  const allPadawans = fs.readFileSync('./data/padawans.txt', 'utf8');

  const newArr = allPadawans.split('\n').slice(0, 4);
  return newArr;
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf8');
  const newArr = scores.split('\n');

  const arrNum = [];
  newArr.forEach((el) => {
    arrNum.push(+el);
  });
  return arrNum;
}

// console.log(getLightsaberScores());

function getStats() {
  const resArr = [];
  const statsArr = [];

  for (let index = 0; index < getPadawanNames().length; index += 1) {
    resArr.push(getPadawanNames()[index], getLightsaberScores()[index]);
  }
  // console.log(resArr);
  const stat1 = [];
  stat1.push(resArr[0], resArr[1]);

  const stat2 = [];
  stat2.push(resArr[2], resArr[3]);

  const stat3 = [];
  stat3.push(resArr[4], resArr[5]);

  const stat4 = [];
  stat4.push(resArr[6], resArr[7]);

  statsArr.push(stat1, stat2, stat3, stat4);
  return statsArr;
}
console.log(getStats());

function writeStats() {
  const names = getStats();
  const strNames = names.join('\n');
  const result = strNames.replaceAll(',', ' ');
  const writeFile = fs.writeFileSync('data/stats.txt', result, 'utf8');
  return writeFile;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
