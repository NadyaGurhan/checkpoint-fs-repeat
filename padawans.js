const fs = require('fs');

function getPadawanNames() {
  const readText = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return readText.trim().split('\n');
}

function getLightsaberScores() {
  const readLightSaber = fs.readFileSync('./data/scores.txt', 'utf-8');
  const splitted = readLightSaber.split('\n');
  const res = splitted.map((elem) => Number(elem));
  return res;
}

// function getStats() {
//   const readPadawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
//   const readLightSaber = fs.readFileSync('./data/scores.txt', 'utf-8');
//   const splittedPadawans = readPadawans.trim().split('\n');
//   const splittedLightSaber = readLightSaber.split('\n');
//   const test = splittedPadawans.map((elem) => elem.split(' '));
//   const test1 = splittedLightSaber.map((elem) => elem.split(' '));
//   const test3 = test[0].concat(test1[0]);
//   const test4 = test[1].concat(test1[1]);
//   const test5 = test[2].concat(test1[2]);
//   const test6 = test[3].concat(test1[3]);
//   console.log(test3, test4, test5, test6);
// }
// console.log(getStats());

function writeStats() {
  const readPadawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const readLightSaber = fs.readFileSync('./data/scores.txt', 'utf-8');
  const splittedPadawans = readPadawans.trim().split('\n');
  const splittedLightSaber = readLightSaber.split('\n');
  const test = splittedPadawans.map((elem, index) => elem + ' '.concat(splittedLightSaber[index]));
  const test1 = test.join(' ');
  fs.writeFileSync('./data.stats.txt', test1);
}
console.log(writeStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  writeStats,
};
