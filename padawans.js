const fs = require('fs');

function getPadawanNames() {
  const padNames = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf8');
  const arrReturn = padNames.split('\r\n');
  arrReturn.pop();
  return arrReturn;
}

function getLightsaberScores() {
  const scores = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf8');
  const arrReturn = scores.split('\r\n');
  for (let i = 0; i < arrReturn.length; i++) {
    arrReturn[i] = Number(arrReturn[i]);
  }
  return arrReturn;
}

function getStats() {
  const padNames = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf8');
  const scores = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf8');
  const arr1 = padNames.split('\r\n');
  arr1.pop();
  const arr2 = scores.split('\r\n');
  const arrReturn = [];
  for (let i = 0; i < arr1.length; i++) {
    arrReturn.push([arr1[i], Number(arr2[i])]);
  }
  return arrReturn;
}

function writeStats() {
  const stats = getStats();
  const str = stats.join('\n');
  const str2 = str.replace(/,/gi, ' ');
  fs.writeFileSync('./data/stats.txt', `${str2}`);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
